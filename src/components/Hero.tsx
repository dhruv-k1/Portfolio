import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = [
  "Generative AI Engineer",
  "ML Engineer",
  "LLM Systems Builder",
  "Data Scientist",
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const el = roleRef.current;
      if (!el) return;
      const word = roles[indexRef.current];

      if (!deletingRef.current) {
        el.textContent = word.slice(0, charRef.current + 1);
        charRef.current++;
        if (charRef.current === word.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, charRef.current - 1);
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 60 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const socials = [
    { icon: Github, href: "https://github.com/dhruv-k1", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dhruv-khandelwal1/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:dhruvkhandelwal011@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "0 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.35rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(79,142,247,0.3)",
          background: "rgba(79,142,247,0.08)",
          marginBottom: "1.8rem",
          fontSize: "0.8rem",
          color: "#4f8ef7",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4f8ef7",
            boxShadow: "0 0 8px #4f8ef7",
            animation: "pulse 2s infinite",
          }}
        />
        Available for Opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        style={{
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          color: "#e8f0fe",
        }}
      >
        Dhruv{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #4f8ef7 0%, #7c5cfc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Khandelwal
        </span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: 500,
          color: "#8ba3c7",
          marginBottom: "1.5rem",
          height: "2.4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.2rem",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <span ref={roleRef} style={{ color: "#00d4ff" }} />
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1.4em",
            background: "#4f8ef7",
            borderRadius: 2,
            animation: "blink 1s step-end infinite",
          }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        style={{
          maxWidth: 560,
          fontSize: "1rem",
          color: "#8ba3c7",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        Final-year student at{" "}
        <strong style={{ color: "#e8f0fe" }}>IIT Roorkee</strong> building
        multi-agent AI systems, RAG pipelines, and ML solutions that solve
        real-world problems at scale.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(79,142,247,0.45)",
          }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "0.75rem 1.8rem",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
            color: "white",
            fontWeight: 600,
            fontSize: "0.95rem",
          }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, borderColor: "#4f8ef7", color: "#4f8ef7" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "0.75rem 1.8rem",
            borderRadius: "8px",
            border: "1px solid rgba(79,142,247,0.35)",
            color: "#8ba3c7",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "all 0.2s",
          }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ display: "flex", gap: "1rem", marginBottom: "4rem" }}
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={{
              scale: 1.15,
              color: "#4f8ef7",
              borderColor: "#4f8ef7",
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: "8px",
              border: "1px solid rgba(79,142,247,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8ba3c7",
              transition: "all 0.2s",
            }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          color: "#4a6fa5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <ArrowDown size={14} />
      </motion.a>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px #4f8ef7} 50%{opacity:.5;box-shadow:0 0 16px #4f8ef7} }
      `}</style>
    </section>
  );
}
