import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Trophy, GraduationCap, Briefcase, Star } from "lucide-react";
import NeuralNetAnim from "./illustrations/NeuralNetAnim";

const achievements = [
  { icon: Trophy, label: "AIR 1908", sub: "JEE Mains 2022" },
  { icon: Star, label: "#1 Nationwide", sub: "WWT Unravel 2025" },
  { icon: GraduationCap, label: "8.51 CGPA", sub: "IIT Roorkee" },
  {
    icon: Briefcase,
    label: "AmEx Day 1",
    sub: "Data Science · Campus Placement",
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "6rem 1.5rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: 32,
              height: 2,
              background: "linear-gradient(90deg, #4f8ef7, #7c5cfc)",
            }}
          />
          <span
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              color: "#4f8ef7",
              fontWeight: 600,
            }}
          >
            ABOUT ME
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* LEFT: Text */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "#e8f0fe",
                lineHeight: 1.2,
              }}
            >
              Building AI that
              <span
                style={{
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                actually works
              </span>
            </h2>
            <p
              style={{
                color: "#8ba3c7",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
                fontSize: "0.97rem",
              }}
            >
              I'm a final-year B.Tech student at{" "}
              <strong style={{ color: "#e8f0fe" }}>IIT Roorkee</strong>{" "}
              (Production & Industrial Engineering) with a deep passion for
              applied AI — specifically multi-agent systems, LLM orchestration,
              and production-ready ML pipelines.
            </p>
            <p
              style={{
                color: "#8ba3c7",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
                fontSize: "0.97rem",
              }}
            >
              At <strong style={{ color: "#e8f0fe" }}>Delhivery</strong>, I
              built an automated bill validation system using LangGraph + Gemini
              2.0 agents that processes 300+ bills/month worth ₹10+ Lacs. I love
              turning messy real-world problems into elegant, scalable AI
              solutions.
            </p>
            <p
              style={{ color: "#8ba3c7", lineHeight: 1.8, fontSize: "0.97rem" }}
            >
              Outside of code, I'm a part of the{" "}
              <strong style={{ color: "#e8f0fe" }}>
                IIT Roorkee Aquatics team
              </strong>
              , competing in swimming and water polo. I also secured a{" "}
              <strong style={{ color: "#4f8ef7" }}>
                Day 1 campus placement offer at American Express
              </strong>{" "}
              for a Data Science role.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="mailto:dhruvkhandelwal011@gmail.com"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 20px rgba(79,142,247,0.35)",
                }}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "7px",
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.87rem",
                }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dhruv-khandelwal1/"
                target="_blank"
                whileHover={{
                  scale: 1.04,
                  borderColor: "#4f8ef7",
                  color: "#4f8ef7",
                }}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "7px",
                  border: "1px solid rgba(79,142,247,0.3)",
                  color: "#8ba3c7",
                  fontWeight: 600,
                  fontSize: "0.87rem",
                  transition: "all 0.2s",
                }}
              >
                LinkedIn
              </motion.a>
            </div>

            {/* Neural network animation below text on left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ marginTop: "2.5rem" }}
            >
              <NeuralNetAnim />
            </motion.div>
          </div>

          {/* RIGHT: Photo placeholder + Achievement cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(79,142,247,0.25)",
                aspectRatio: "452 / 447",
              }}
            >
              <img
                src="/Portfolio/dhruv.jpeg"
                alt="Dhruv Khandelwal"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center top",
                }}
              />
            </motion.div>

            {/* Achievement cards 2×2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {achievements.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.04,
                    borderColor: "rgba(79,142,247,0.5)",
                  }}
                  style={{
                    padding: "1.2rem 1rem",
                    borderRadius: "12px",
                    background: "rgba(13,31,60,0.7)",
                    border: "1px solid rgba(26,52,96,0.8)",
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(79,142,247,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 0.6rem",
                    }}
                  >
                    <Icon size={18} color="#4f8ef7" />
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#e8f0fe",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#4a6fa5",
                      marginTop: "0.2rem",
                    }}
                  >
                    {sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
