import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 300;

export default function CanvasScrollSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const loadedImages = new Array(FRAME_COUNT);

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format to frame-0001.jpg
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `/frames/frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loaded++;
        loadedImages[i - 1] = img;
        setImagesLoaded(loaded);
      };
    }
    setImages(loadedImages);
  }, []);

  // Update canvas on scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Make canvas full resolution
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = (progress) => {
      if (!images[0] || !images[0].complete) return;
      
      const targetFrameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );

      // Find the closest loaded frame looking backwards
      let img = null;
      for (let i = targetFrameIndex; i >= 0; i--) {
        if (images[i] && images[i].complete) {
          img = images[i];
          break;
        }
      }

      if (img && img.complete) {
        // Draw image covering the canvas (object-fit: cover equivalent)
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    // Initial render
    render(0);

    const unsubscribe = scrollYProgress.onChange(render);
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(scrollYProgress.get());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, imagesLoaded, scrollYProgress]);

  const op1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-brand-dark">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-dark/80 backdrop-blur-md border border-brand-gold/20 px-4 py-2 rounded-full text-brand-gold text-xs tracking-widest font-sans uppercase shadow-lg">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            Loading {Math.floor((imagesLoaded / FRAME_COUNT) * 100)}%
          </div>
        )}
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        
        {/* Overlays */}
        <motion.div 
          style={{ opacity: op1 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6 text-center"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-brand-ivory font-light tracking-tight mb-4 drop-shadow-2xl">
            Sai Krishna <span className="italic">Photography</span>
          </h1>
          <p className="text-brand-ivory/90 text-sm md:text-base font-sans tracking-widest uppercase drop-shadow-lg">
            30 years. One story at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
