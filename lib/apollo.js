import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: process.env.API_URL, // Server URL (must be absolute)
  })
};
export default withData(config);