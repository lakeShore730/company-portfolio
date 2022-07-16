import Container from "../components/ui/container";
import CopyRight from "../components/copy-right";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { motion } from "framer-motion";
import cn from "classnames";
import { useUiContext } from "../contexts/ui-context";

const AppLayout = (props) => {
  const { isMobileLayout } = useUiContext();
  const [isNavbarInView, setIsNavbarInView] = useState(false);

  useEffect(() => {
    if (!window) return;
    const scrollEvent = document.addEventListener("scroll", function (e) {
      const lastKnownScrollPosition = window.scrollY;
      if (lastKnownScrollPosition > 800) setIsNavbarInView(true);
      else setIsNavbarInView(false);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div>
      <div>
        <motion.div
          className={cn("fixed z-10 top-0 w-full", {
            "bg-[#F9F9F9]": !isNavbarInView,
            "bg-[#efefef]": isNavbarInView,
          })}
          initial={{ y: isMobileLayout ? -40 : -66, opacity: 1 }}
          whileInView={{ y: isNavbarInView ? 0 : -66 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.2,
          }}
        >
          <Container>
            <Navbar />
          </Container>
        </motion.div>
      </div>

      <div>{props.children}</div>
      <div className="bg-[#f6f6f6]">
        <Container>
          <CopyRight />
        </Container>
      </div>
    </div>
  );
};

export default AppLayout;
