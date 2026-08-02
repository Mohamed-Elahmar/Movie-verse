import Logo from "@/components/Explore/Logo";
import Particles from "../components/Particles";
import Slug from "@/components/HomePage/Slug";
import GhostCursor from "../components/GhostCursor";
import SpecularButton from "../components/SpecularButton";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Particles
        particleColors={["#3b82f6"]}
        particleCount={500}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={300}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        className={`absolute top-0 left-0`}
      />
      {/* <div style={{ height: 600, position: "relative" }}> */}
      <GhostCursor
        // Visuals
        color="#3b82f6"
        brightness={1}
        edgeIntensity={0}
        // Trail and motion
        trailLength={40}
        inertia={0.5}
        // Post-processing
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1}
        bloomThreshold={0.025}
        // Fade-out behavior
        fadeDelayMs={1000}
        fadeDurationMs={1500}
        className={`absolute top-0 left-0`}
      />
      {/* </div> */}

      <div className="flex flex-col text-center items-center text-5xl md:text-7xl lg:text-8xl relative top-1/3 z-50 gap-5 pt-0">
        <Logo />
        <Slug />
        <div className="flex flex-row gap-6">
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => navigate("/explore")}
          >
            Start your adventure
          </SpecularButton>
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => console.log("clicked")}
            disabled={true}
          >
            Sign-up / Log-in
          </SpecularButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
