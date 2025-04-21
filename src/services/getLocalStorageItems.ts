

export function getUsageData() {
  const raw = localStorage.getItem("usage_data");
  return raw
    ? JSON.parse(raw)
    : {
        desktopBackgroundImages: {},
        mobileBackgroundImages: {},
        inspiringQuotes: {},
      };
}  

export function saveUsageData(data: unknown) {
  localStorage.setItem("usage_data", JSON.stringify(data));
}