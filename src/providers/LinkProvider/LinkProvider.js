import { createContext, useContext } from "react";

const LinkProviderContext = createContext(async () => {});
const LinkProvider = LinkProviderContext.Provider;
const useLink = () => useContext(LinkProviderContext);

export { useLink };
export default LinkProvider;
