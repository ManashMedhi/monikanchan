
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const region = process.env.AWS_REGION;
const bucket = process.env.AWS_S3_BUCKET;

const cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN;

if (!region || !bucket || !cloudFrontDomain) {
  throw new Error(
    "AWS_REGION, AWS_S3_BUCKET and CLOUDFRONT_DOMAIN must be configured."
  );
}

export const s3 = new S3Client({ region });

// Upload an image to private S3.
export async function uploadObject({
  key,
  body,
  contentType,
}) {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    })
  );
}

// Generate a stable CloudFront image URL.
export async function getObjectUrl(key) {
  const encodedKey = key
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return `https://${cloudFrontDomain}/${encodedKey}`;
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
