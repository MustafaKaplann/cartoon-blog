import React, { useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './effect.css'

export default function Gelenler() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelect = () => fileInputRef.current?.click();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    try {
      // 1) Presigned URL için Worker'a istek
      const workerUrl = import.meta.env.VITE_WORKER_URL;
      const { data } = await axios.post(
        `${workerUrl}/generate-upload`,
        { filename: file.name, contentType: file.type }
      );
      const { url, key } = data;

      // 2) R2'ye PUT ile yükleme
      await axios.put(url, file, {
        headers: { 'Content-Type': file.type }
      });

      // 3) CDN URL oluşturma
      const cdnUrl = import.meta.env.VITE_CDN_URL;
      const publicUrl = `${cdnUrl}/${key}`;
      setVideoUrl(publicUrl);
      setFile(null);
      setPreview('');
    } catch (err: any) {
      console.error('Upload error:', err);
      alert('Yükleme hatası: ' + (err.response?.data?.message || err.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
  
              <div className="container z-[-1] absolute opacity-70">
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

      <div className="container z-[-1] w-300 absolute flex justify-end opacity-75 hidden md:flex">
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
      </div>
      <header className="w-full max-w-md mb-6">
        <motion.h1
          className="text-3xl my-10 font-bold text-center text-white mb-4 text-shadow-lg text-shadow-stone-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Videonu Gönder!
        </motion.h1>
      </header>

      <motion.div
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {!preview && !videoUrl && (
          <div
            className="border-2 border-dashed border-indigo-300 rounded-lg h-48 flex items-center justify-center cursor-not-allowed hover:border-indigo-400"
            // onClick={handleSelect}
          >
            <p className="text-indigo-400">Video yüklemek için tıkla<br />(YAKINDA) </p>
            <input
              type="file"
              accept="video/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFile}
            />
          </div>
        )}

        {preview && (
          <div className="relative">
            <video
              src={preview}
              controls
              className="rounded-lg w-full h-auto max-h-64 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              onClick={() => { setPreview(''); setFile(null); }}
            >
              ✕
            </button>
          </div>
        )}

        {videoUrl && (
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Yüklendi!</h2>
            <video
              src={videoUrl}
              controls
              className="rounded-lg w-full h-auto max-h-64 object-cover"
            />
          </div>
        )}

        <button
          className="w-full py-2 text-white font-medium rounded-xl shadow-md \
            bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 \
            disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!file || uploading}
          onClick={handleUpload}
        >
          {uploading ? 'Yükleniyor...' : 'Yükle'}
        </button>
      </motion.div>

      <footer className="mt-auto text-sm text-white pb-4">
        © {new Date().getFullYear()} Bizziko
      </footer>
    </div>
)}