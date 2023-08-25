import env from "../../.env"
import { createStorefrontClient } from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  privateStorefrontToken: env.SHOPIFY_STOREFRONT_TOKEN,
  storeDomain: env.SHOPIFY_STOREFRONT_URL || "",
  storefrontApiVersion: '2023-01',
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;

export const shopifyFetch = async (props: { query: string, variables: Record<string, unknown>}) => {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify(props),
    // When possible, add the 'buyerIp' property.
    // headers: getPrivateTokenHeaders({buyerIp: "..."}),
    headers: getPrivateTokenHeaders(),
    method: 'POST',
  });

  const json = await response.json();

  return json;
}
