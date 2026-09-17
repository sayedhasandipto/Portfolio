"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { PERSON, NAV_LINKS, NOW } from "@/lib/data";
import { playClick, playBeep, playSuccess } from "@/lib/sound";

const HELP_TEXT = `Available commands:
  <span class="k">help</span>      - Show this help message
  <span class="k">about</span>     - View profile summary
  <span class="k">stack</span>     - View tech stack
  <span class="k">resume</span>    - Open Resume / CV
  <span class="k">now</span>       - View current focus
  <span class="k">contact</span>   - Get contact info
  <span class="k">github</span>    - Open GitHub profile
  <span class="k">linkedin</span>  - Open LinkedIn profile
  <span class="k">nav [sec]</span> - Navigate to section (about, stack, work, contact)
  <span class="k">clear</span>     - Clear terminal
  <span class="k">exit</span>      - Close terminal`;

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "muted", text: "Portfolio Terminal v1.0.0" },
    { type: "muted", text: 'Type "help" for a list of commands.' },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => {
          if (!v) playBeep();
          return !v;
        });
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, open]);

  const addLine = (text, type = "normal") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const executeCommand = (cmdStr) => {
    const args = cmdStr.trim().toLowerCase().split(" ");
    const cmd = args[0];

    addLine(cmdStr, "cmd");

    if (!cmd) return;

    if (cmd === "help") {
      playClick();
      addLine(HELP_TEXT);
    } else if (cmd === "about") {
      playClick();
      addLine(`Name: ${PERSON.name}\nRole: ${PERSON.title}\nLocation: ${PERSON.location}`);
    } else if (cmd === "stack" || cmd === "skills") {
      playClick();
      addLine("React, Node.js, Express, MongoDB, Next.js, Tailwind");
    } else if (cmd === "now") {
      playClick();
      addLine(`Learning: ${NOW.learning}\nBuilding: ${NOW.building}\nReading: ${NOW.reading}`);
    } else if (cmd === "contact") {
      playClick();
      addLine(`Email: ${PERSON.email}\nTwitter: ${PERSON.twitter}`);
    } else if (cmd === "resume" || cmd === "cv") {
      playSuccess();
      addLine("Opening Resume / CV...", "ok");
      setTimeout(() => window.open(PERSON.resumeUrl, "_blank"), 500);
    } else if (cmd === "github") {
      playSuccess();
      addLine("Opening GitHub...", "ok");
      setTimeout(() => window.open(PERSON.github, "_blank"), 500);
    } else if (cmd === "linkedin") {
      playSuccess();
      addLine("Opening LinkedIn...", "ok");
      setTimeout(() => window.open(PERSON.linkedin, "_blank"), 500);
    } else if (cmd === "nav") {
      const sec = args[1];
      const link = NAV_LINKS.find((l) => l.id === sec);
      if (link) {
        playSuccess();
        addLine(`Navigating to /#${sec}...`, "ok");
        setOpen(false);
        setTimeout(() => {
          document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        playBeep();
        addLine(`Section not found. Try: about, stack, work, contact`, "err");
      }
    } else if (cmd === "clear") {
      playClick();
      setHistory([]);
    } else if (cmd === "exit") {
      setOpen(false);
    } else if (cmd === "sudo") {
      playBeep();
      addLine("Guest user detected: You already have full access to explore the portfolio!", "err");
    } else {
      playBeep();
      addLine(`Command not found: ${cmd}. Type "help" for available commands.`, "err");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      const val = input.trim();
      if (val) {
        setCmdHistory((prev) => [val, ...prev]);
        setCmdIndex(-1);
      }
      executeCommand(val);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdIndex < cmdHistory.length - 1) {
        const nextIdx = cmdIndex + 1;
        setCmdIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex > 0) {
        const nextIdx = cmdIndex - 1;
        setCmdIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      <button
        id="terminalTrigger"
        onClick={() => {
          playBeep();
          setOpen(true);
        }}
        aria-label="Open command palette"
      >
        <TerminalIcon className="w-4 h-4" />
        <span className="tt-label">Terminal</span>
        <kbd>⌘K</kbd>
      </button>

      <div
        id="terminalPalette"
        className={open ? "open" : ""}
        onClick={(e) => {
          if (e.target.id === "terminalPalette") setOpen(false);
        }}
      >
        <div className="terminal-window">
          <div className="term-head">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <div>{PERSON.handle} — term-01</div>
            <button onClick={() => setOpen(false)} className="hover:text-white transition">
              ESC
            </button>
          </div>
          
          <div className="term-body" ref={bodyRef}>
            {history.map((h, i) => (
              <div
                key={i}
                className={`term-line ${h.type !== "normal" ? h.type : ""}`}
                dangerouslySetInnerHTML={{ __html: h.text }}
              />
            ))}
          </div>

          <div className="term-input-row" onClick={() => inputRef.current?.focus()}>
            <span className="prompt">❯</span>
            <input
              ref={inputRef}
              id="termInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          
          <div className="term-hint">
            <span>Type &apos;help&apos; for commands</span>
            <span>↑/↓ for history</span>
          </div>
        </div>
      </div>
    </>
  );
}
