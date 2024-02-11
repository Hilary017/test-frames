import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Begin'
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmULxHFwEtBqQy85Bv2z74ddZTSwrXXyy5qUR4Qap23cqU/0.png`,
  postUrl: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/api/frame?id=1`
});

export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of comic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmULxHFwEtBqQy85Bv2z74ddZTSwrXXyy5qUR4Qap23cqU/0.png`]
  },
  other: {
    ...frameMetadata,
  }
}

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
