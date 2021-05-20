import { GetServerSidePropsContext } from "next";
import { stub } from "test-utils";
import { ChakraSsrProps, getChakraSsrProps } from "./SsrProps";

it("should get cookies from request", async () => {
  const cookie = "my-cookie";

  const response = await getChakraSsrProps(
    stub<GetServerSidePropsContext>({
      req: {
        headers: {
          cookie,
        },
      },
    })
  );

  const cookies = (response as { props: ChakraSsrProps }).props.cookies;

  expect(cookies).toEqual(cookie);
});