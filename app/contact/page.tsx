"use client";

import { MaskContainer } from "@/components/ui/mask";

export default function SVGMaskEffectDemo() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gray-100">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="w-full h-full flex items-center justify-center rounded-md border"
      >
        <div className="text-center text-xl">
          The first rule of <span className="text-red-500">MRR Club</span> is you
          do not talk about MRR Club. The second rule of MRR Club is you DO NOT
          talk about <span className="text-red-500">MRR Club</span>.
        </div>
      </MaskContainer>
    </div>
  );
}
