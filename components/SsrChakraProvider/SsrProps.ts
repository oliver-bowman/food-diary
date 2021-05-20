import { GetServerSideProps } from "next";

export interface ChakraSsrProps {
  cookies: string;
}

/**
 * Enables rendering the theme on the server-side, to avoid the theme flash on the client whilst hydrating
 */
export const getChakraSsrProps: GetServerSideProps<ChakraSsrProps> = async ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies, and NextJS does not support undefined, hence ??
      cookies: req.headers.cookie ?? "",
    },
  };
};
