import { useLanguage } from "@/contexts/Languagecontext";

const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "hi");
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageDropdown;
