export default function WovenLogo() {
  return (
    <span className={"woven-logo"}>
      <svg
        className={"woven-logo-mark"}
        viewBox={"0 0 32 32"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        aria-hidden={"true"}
      >
        <path
          d={
            "M8 3 29 24M3 8 24 29M16 3 29 16M3 16 16 29M24 3 3 24M29 8 8 29M16 3 3 16M29 16 16 29"
          }
        ></path>
      </svg>
      <span className={"woven-logo-word"}>{"WOVEN"}</span>
    </span>
  );
}
