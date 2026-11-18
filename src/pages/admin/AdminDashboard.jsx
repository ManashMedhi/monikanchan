
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Check whether the admin is logged in
  const checkAdmin = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/admin/auth/me`,
        { credentials: "include" }
      );

      if (!response.ok) {
        navigate("/admin");
        return false;
      }

      return true;
    } catch {
      setError("Unable to connect to the server.");
      return false;
    }
  };

  // Fetch gallery items
  const fetchGallery = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/gallery?page=1&limit=100`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not load gallery");
      }

      setItems(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const authenticated = await checkAdmin();

      if (authenticated) {
        await fetchGallery();
      }
    };

    initialize();
  }, []);

  // Upload photos
  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    if (photos.length === 0) {
      setError("Please select at least one photo.");
      return;
    }

    const formData = new FormData();

    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    setUploading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/api/gallery/photos`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Photo upload failed");
      }

      setMessage("Photos uploaded successfully!");
      setPhotos([]);
      e.target.reset();

      await fetchGallery();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  // Add a YouTube video
  const handleVideoSubmit = async (e) => {
    e.preventDefault();

    setUploading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/api/gallery/videos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title: videoTitle,
            url: videoUrl,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to add video");
      }

      setMessage("Video added successfully!");
      setVideoTitle("");
      setVideoUrl("");

      await fetchGallery();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  // Delete a gallery item
  const handleDelete = async (item) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${item.title || "this item"}"?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/api/gallery/${item._id || item.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      setMessage("Gallery item deleted successfully!");
      await fetchGallery();
    } catch (err) {
      setError(err.message);
    }
  };

  // Admin logout
  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/admin/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-[#100e0b] text-white px-4 py-8 md:px-10">

      {/* Responsive Dashboard Header */}
      <header className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
        <div className="min-w-0">
          <p className="text-[#c9a45c] tracking-[0.3em] text-xs sm:text-sm font-semibold">
            MONIKANCHAN
          </p>
          <h1 className="text-2xl sm:text-3xl font-serif mt-2">
            Gallery Dashboard
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Manage your photos and videos
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-[#a88746]/50 text-[#c9a45c] px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#c9a45c]/10 hover:border-[#c9a45c] transition-all duration-300"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="border border-red-500/50 text-red-400 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-500/10 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto">

        {/* Messages */}
        {message && (
          <p className="bg-green-900/30 border border-green-700 text-green-300 p-3 rounded-lg mb-5">
            {message}
          </p>
        )}

        {error && (
          <p className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-lg mb-5">
            {error}
          </p>
        )}

        {/* Upload Photos */}
        <section className="bg-[#1c1914] border border-[#a88746]/30 rounded-xl p-6 mb-7">
          <h2 className="text-xl font-semibold mb-5">
            Upload Photos
          </h2>

          <form onSubmit={handlePhotoUpload} className="space-y-4">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              required
              onChange={(e) => setPhotos(Array.from(e.target.files || []))}
              className="block w-full text-sm text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-[#b18a45] file:px-4 file:py-2 file:text-black"
            />

            <p className="text-gray-500 text-xs">
              Supported formats: JPG, PNG and WebP
            </p>

            {photos.length > 0 && (
              <p className="text-sm text-gray-300">
                {photos.length} photo(s) selected
              </p>
            )}

            <button
              type="submit"
              disabled={uploading}
              className="bg-[#b18a45] hover:bg-[#c9a45c] disabled:opacity-50 text-black font-semibold px-6 py-3 rounded-lg"
            >
              {uploading ? "Please wait..." : "Upload Photos"}
            </button>
          </form>
        </section>

        {/* Add Video */}
        <section className="bg-[#1c1914] border border-[#a88746]/30 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-5">
            Add YouTube Video
          </h2>

          <form onSubmit={handleVideoSubmit} className="space-y-4">
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Enter video title"
              required
              className="w-full bg-[#29251e] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[#c9a45c]"
            />

            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste YouTube video URL"
              required
              className="w-full bg-[#29251e] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[#c9a45c]"
            />

            <button
              type="submit"
              disabled={uploading}
              className="bg-[#b18a45] hover:bg-[#c9a45c] disabled:opacity-50 text-black font-semibold px-6 py-3 rounded-lg"
            >
              {uploading ? "Please wait..." : "Add Video"}
            </button>
          </form>
        </section>

        {/* Gallery Items */}
        <section>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-serif">
              Gallery Items
            </h2>

            <button
              onClick={fetchGallery}
              className="text-[#c9a45c] text-sm hover:underline"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-gray-400">Loading gallery...</p>
          ) : items.length === 0 ? (
            <p className="text-gray-400">No gallery items found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => (
                <div
                  key={item._id || item.id}
                  className="bg-[#1c1914] border border-[#a88746]/20 rounded-xl overflow-hidden"
                >
                  {item.type === "video" ? (
                    <div className="h-44 flex items-center justify-center bg-[#29251e] text-[#c9a45c]">
                      <span className="text-5xl">▶</span>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title || "Gallery photo"}
                      className="w-full h-44 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <p className="font-medium truncate">
                      {item.title || "Untitled"}
                    </p>

                    <p className="text-xs text-gray-500 mt-1 capitalize">
                      {item.type || "Photo"}
                    </p>

                    <button
                      onClick={() => handleDelete(item)}
                      className="mt-4 text-red-400 text-sm hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default AdminDashboard;
