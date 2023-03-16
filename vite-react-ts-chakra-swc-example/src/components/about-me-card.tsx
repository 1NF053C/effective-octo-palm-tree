import { ThreeCardLayout } from "./layouts/three-card-layout";

export function AboutMeCard() {
  return (
    <div className="three-card-layout">
      <ThreeCardLayout
        first={<div>one</div>}
        second={<div>two</div>}
        third={<div>three</div>}
      />
    </div>
  );
}
