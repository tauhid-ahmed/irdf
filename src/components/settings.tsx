import * as Icons from "@/components/icons";

export default function Settings() {
  return (
    <div className="w-[270px] bg-white rounded-3xl h-full px-5">
      <div className="bg-white">
        <h3 className="text-center text-xl text-gray-700 font-semibold rounded py-9">
          Settings
        </h3>
        <ul className="text-gray-600 [&>*]:h-13 [&>*]:bg-gray-100 space-y-4 [&>*]:flex [&>*]:items-center [&>*]:px-3.5 gap-3">
          <li className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-brand/10 size-7 rounded-full">
              <Icons.Lang className="size-5" />
            </span>{" "}
            Language Settings
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-brand/10 size-7 rounded-full">
              <Icons.Stack className="size-5" />
            </span>{" "}
            General Settings
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-brand/10 size-7 rounded-full">
              <Icons.Menu className="size-5" />
            </span>{" "}
            Font Settings
          </li>
          {/* fake active style */}
          <li className="text-brand flex items-center gap-2 relative before:absolute before:left-0 before:inset-y-0  before:w-1.5 overflow-hidden rounded before:bg-brand">
            <span className="inline-flex items-center justify-center bg-brand/10 size-7 rounded-full">
              <Icons.Menu className="size-5 text-brand" />
            </span>
            Appearance Settings
          </li>
        </ul>
        <div className="py-6 text-gray-600 border px-3 rounded border-gray-300 flex justify-between items-center">
          Night Mode
          {/* fake switch button */}
          <div className="h-2 w-6 rounded-full bg-gray-500 relative before:absolute before:size-3 before:bg-gray-600 before:rounded-full flex items-center"></div>
        </div>
      </div>{" "}
    </div>
  );
}
