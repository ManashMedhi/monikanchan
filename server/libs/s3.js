
import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const region = process.env.AWS_REGION;
const bucket = process.env.AWS_S3_BUCKET;
const cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN?.trim();

if (!region || !bucket) {
  throw new Error("AWS_REGION and AWS_S3_BUCKET must be configured.");
}

export const s3 = new S3Client({ region });

// Upload an image to private S3.
export async function uploadObject({ key, body, contentType }) {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: "private, max-age=300",
    })
  );
}

// Use CloudFront when configured; otherwise use a temporary
// presigned URL for the private S3 object.
export async function getObjectUrl(key) {
  if (cloudFrontDomain) {
    const encodedKey = key
      .split("/")
      .map(encodeURIComponent)
      .join("/");

    return `https://${cloudFrontDomain}/${encodedKey}`;
  }

  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  return getSignedUrl(s3, command, {
    expiresIn: 900,
  });
}

// Delete an image from S3.
export async function deleteObject(key) {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}
