import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  Award,
  ExternalLink,
  Download,
  X,
  Calendar,
  Sparkles,
  ChevronRight,
  Terminal,
} from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { academicPerformance, certificatesAndFeats } from "../data/credentials.js";

const spring = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 };
const modalTransition = { type: "spring", stiffness: 180, damping: 24, mass: 0.9 };

export default function Credentials() {
  const [activeDoc, setActiveDoc] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive PDF viewer
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [activeDoc]);

  const handleOpenDoc = (doc) => {
    setIframeLoading(true);
    setActiveDoc(doc);
  };

  return (
    <section
      id="credentials"
      className="mx-auto max-w-[1680px] px-5 py-28 sm:px-8 lg:px-12"
    >
      <SectionLabel index="04" label="Credentials & Files" kicker="Academic + Feats" />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Subdivision 1: Academic Performance */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <GraduationHeaderIcon />
            <h2 className="text-2xl font-bold tracking-tight text-crisp sm:text-3xl">
              Academic Performance
            </h2>
          </div>
          <div className="space-y-4">
            {academicPerformance.map((item, index) => (
              <CredentialCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => handleOpenDoc(item)}
              />
            ))}
          </div>
        </div>

        {/* Subdivision 2: Other Certificates and Feats */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Sparkles size={24} className="text-crisp" />
            <h2 className="text-2xl font-bold tracking-tight text-crisp sm:text-3xl">
              Certificates & Feats
            </h2>
          </div>
          <div className="space-y-4">
            {certificatesAndFeats.map((item, index) => (
              <CredentialCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => handleOpenDoc(item)}
                isCertificate={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* OS-Style Window Modal Popup */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoc(null)}
              className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
              data-lenis-prevent
            />

            {/* OS Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={modalTransition}
              className="relative flex h-full max-h-[85vh] w-full max-w-5xl flex-col border border-divider/70 bg-surface shadow-2xl"
              data-lenis-prevent
            >
              {/* OS Title Bar */}
              <div className="flex items-center justify-between border-b border-divider/60 bg-[#161616] px-4 py-3.5">
                {/* Control Dots */}
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setActiveDoc(null)}
                    className="group relative flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-[#ff5f56] transition-colors hover:bg-[#ff3b30]"
                    title="Close"
                  >
                    <X size={8} className="text-obsidian opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" title="Minimize" />
                  <div className="h-3.5 w-3.5 rounded-full bg-[#27c93f]" title="Maximize" />
                </div>

                {/* Document Title */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-xs font-mono text-muted max-w-[40%] truncate">
                  <Terminal size={12} className="shrink-0" />
                  <span className="truncate">{activeDoc.title}.pdf</span>
                </div>

                {/* Title Bar Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={activeDoc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center border border-divider bg-surface text-muted transition-colors hover:border-muted hover:text-crisp"
                    title="Open in new tab"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={activeDoc.file}
                    download={activeDoc.file.substring(1)}
                    className="flex h-8 w-8 items-center justify-center border border-divider bg-surface text-muted transition-colors hover:border-muted hover:text-crisp"
                    title="Download document"
                  >
                    <Download size={14} />
                  </a>
                </div>
              </div>

              {/* OS Window Body */}
              <div className="relative flex-1 bg-[#090909] overflow-hidden">
                {/* Loading State Indicator */}
                {iframeLoading && !isMobile && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#090909] text-muted">
                    <div className="h-8 w-8 animate-spin border-2 border-divider border-t-crisp rounded-full" />
                    <span className="font-mono text-xs uppercase tracking-widest">
                      Executing PDF Document...
                    </span>
                  </div>
                )}

                {/* PDF Viewer Embed or Mobile Fallback */}
                {isMobile ? (
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center border border-divider bg-surface text-crisp">
                      {activeDoc.id.includes("marksheet") || activeDoc.id.includes("scorecard") ? (
                        <FileText size={40} strokeWidth={1.2} />
                      ) : (
                        <Award size={40} strokeWidth={1.2} />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-crisp">{activeDoc.title}</h3>
                    <p className="mb-4 text-sm text-muted">{activeDoc.subtitle}</p>
                    <p className="mb-8 max-w-sm text-xs leading-5 text-muted/80">
                      {activeDoc.description}
                    </p>

                    <div className="flex flex-col w-full gap-3 max-w-xs">
                      <a
                        href={activeDoc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-divider bg-surface py-4 text-sm font-bold uppercase tracking-wider text-crisp transition-all hover:bg-white hover:text-obsidian"
                      >
                        <ExternalLink size={16} />
                        View Full PDF
                      </a>
                      <a
                        href={activeDoc.file}
                        download={activeDoc.file.substring(1)}
                        className="flex items-center justify-center gap-2 bg-crisp py-4 text-sm font-bold uppercase tracking-wider text-obsidian transition-opacity hover:opacity-90"
                      >
                        <Download size={16} />
                        Download File
                      </a>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`${activeDoc.file}#toolbar=0&navpanes=0`}
                    title={activeDoc.title}
                    className="h-full w-full border-none bg-white"
                    onLoad={() => setIframeLoading(false)}
                  />
                )}
              </div>

              {/* OS Window Status Bar */}
              <div className="flex items-center justify-between border-t border-divider/60 bg-[#121212] px-4 py-2 text-[10px] font-mono text-muted">
                <span>SYSTEM STATUS: SECURE</span>
                <span>TYPE: {activeDoc.tags[0]}</span>
                <span>YEAR: {activeDoc.date}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Sub-component for Credential Card
function CredentialCard({ item, index, onClick, isCertificate = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring, delay: index * 0.06 }}
      onClick={onClick}
      className="group relative cursor-pointer border border-divider bg-surface/50 p-6 transition-all duration-300 hover:border-muted hover:bg-surface"
    >
      {/* Decorative accent grid lines */}
      <div className="absolute right-0 top-0 h-4 w-[1px] bg-divider group-hover:bg-muted" />
      <div className="absolute right-0 top-0 h-[1px] w-4 bg-divider group-hover:bg-muted" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          {/* Card Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-divider bg-obsidian text-muted transition-colors duration-300 group-hover:border-muted group-hover:text-crisp">
            {isCertificate ? <Award size={18} strokeWidth={1.5} /> : <FileText size={18} strokeWidth={1.5} />}
          </div>

          <div>
            <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-xs font-mono uppercase text-muted">
                {item.date}
              </span>
              <span className="text-[10px] text-muted/40">//</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted">
                {item.tags[0]}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-tight text-crisp transition-colors duration-300 group-hover:text-white">
              {item.title}
            </h3>
            <p className="mb-3 text-xs font-medium text-muted/80">{item.subtitle}</p>
            <p className="max-w-md text-xs leading-5 text-muted transition-colors duration-300 group-hover:text-muted/90">
              {item.description}
            </p>
          </div>
        </div>

        {/* View Trigger */}
        <div className="flex items-center gap-1 self-end font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-300 group-hover:text-crisp sm:self-center">
          <span>View</span>
          <ChevronRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
}

// Mini sub-component for custom header icon
function GraduationHeaderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-crisp"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}
