import packageJSON from "../package.json";

export default function Footer() {
  return (
    <footer className="h-12 border-t px-4 flex justify-end items-center text-slate-400">
      <p>
        Proudly driven by Tauri
        {packageJSON.devDependencies["@tauri-apps/cli"]} & Next.js
        {packageJSON.dependencies.next ?? ""} on React.js
        {packageJSON.dependencies.react ?? ""}
      </p>
    </footer>
  );
}
