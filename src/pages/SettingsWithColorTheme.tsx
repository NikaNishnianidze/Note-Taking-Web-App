import ColorTheme from "./ColorTheme";
import Settings from "./Settings";

export default function SettingsWithColorTheme() {
  return (
    <div className="dk:flex dk:flex-row w-full ">
      <Settings noMargin />
      <ColorTheme noMargin />
    </div>
  );
}
