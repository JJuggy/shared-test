import { jsxs as g, jsx as r } from "react/jsx-runtime";
import n from "classnames";
import { useMemo as c } from "react";
const p = [
  "paid",
  "active",
  "success",
  "checked-in",
  "checked-out",
  "admitable",
  "open",
  "published"
], u = ["pending"], t = ["failed", "expired", "unpaid", "in-active", "un-paid"], m = ["checked-out", "cancelled", "draft", "archived"], f = ({ variant: e = "" }) => {
  const o = c(() => p.includes(e == null ? void 0 : e.toLocaleLowerCase()), [e]), s = c(() => u.includes(e == null ? void 0 : e.toLocaleLowerCase()), [e]), l = c(() => t.includes(e == null ? void 0 : e.toLocaleLowerCase()), [e]), d = c(() => m.includes(e == null ? void 0 : e.toLocaleLowerCase()), [e]);
  return /* @__PURE__ */ g(
    "span",
    {
      className: n(
        "inline-flex  items-center rounded-xl  px-2.5 py-1 text-[10px] font-medium ring-1 ring-inset capitalize",
        {
          "bg-green-100/70 text-green-700 ring-green-600/60": o,
          "bg-yellow-100/70 text-yellow-700 ring-yellow-600/60": s,
          "bg-red-100/70 text-red-700 ring-red-600/60": l,
          "bg-gray-100/70 text-gray-700 ring-gray-600/60": d
        }
      ),
      children: [
        /* @__PURE__ */ r("span", { className: "w-1.5 h-1.5 bg-current rounded-full mr-1.5" }),
        e == null ? void 0 : e.replace(/-/g, " ")
      ]
    }
  );
};
export {
  f as Status
};
