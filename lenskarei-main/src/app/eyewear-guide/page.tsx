import type { Metadata } from "next";
import Image from "next/image";
import { FaceStudio } from "@/components/face-studio";
import { ImageFrameReveal, Reveal } from "@/components/motion";
import { ShapeStudio } from "@/components/shape-studio";

export const metadata: Metadata = {
  title: {
    absolute: "Eyewear Guide | Frame Shapes and Sizes | Lenskarei Opticals",
  },
  description:
    "Understand eyewear frame shapes, temple measurements such as 52–18–140, and materials before choosing your next pair at Lenskarei Opticals.",
};

export default function EyewearGuidePage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Eyewear Guide
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Know your frame before you choose
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/88">
              Start with a shape you enjoy wearing, then compare the dimensions
              and material. A size label alone does not tell the whole story—two
              designs can fit differently even when their labels match.
            </p>
          </Reveal>

          <ImageFrameReveal delay={0.12} className="mt-12 sm:mt-16">
            <div className="group relative aspect-[16/9] w-full overflow-hidden bg-mist">
              <Image
                src="/images/guide.jpg"
                alt="Classic eyewear frame silhouettes alongside a precision brass optical caliper"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
            </div>
          </ImageFrameReveal>

          {/* Temple Measurements */}
          <div className="mt-20 grid gap-12 border-t border-maroon/15 pt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-maroon">
                01 · Reading Frame Numbers
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-maroon sm:text-4xl">
                What 52–18–140 means inside a temple
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Frame measurements often appear as three numbers printed on the
                inside of the temple arm. For example,{" "}
                <strong className="font-medium text-charcoal">52–18–140</strong>{" "}
                indicates a 52 mm lens width, an 18 mm bridge width and a 140 mm
                temple length. This is an illustration—each frame design carries
                its own exact dimensions.
              </p>

              <dl className="mt-10 grid gap-8 border-y border-maroon/12 py-8 sm:grid-cols-3">
                <div>
                  <dt className="font-serif text-3xl font-semibold text-maroon">
                    52 mm
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    Horizontal width of a single lens at its widest point.
                  </dd>
                </div>
                <div>
                  <dt className="font-serif text-3xl font-semibold text-maroon">
                    18 mm
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    Distance between the two lenses where the frame rests on the
                    nose.
                  </dd>
                </div>
                <div>
                  <dt className="font-serif text-3xl font-semibold text-maroon">
                    140 mm
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    Total arm length from the front hinge to the tip behind the
                    ear.
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm leading-relaxed text-muted">
                Compare these details with a comfortable pair you already own.
                Ask about anything that is not clear and check the fit in person
                where possible.
              </p>
            </Reveal>
          </div>

          {/* Frame Silhouettes */}
          <div className="mt-20 border-t border-maroon/15 pt-16">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-maroon">
                02 · Classic Silhouettes
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-maroon sm:text-4xl">
                Start with a shape you like
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Shape is a personal preference—the right pair balances style
                with comfortable nose bridge support and temple balance.
              </p>
            </Reveal>

            <div className="mt-10">
              <ShapeStudio />
            </div>
          </div>

          <div id="faces" className="mt-20 scroll-mt-28 border-t border-maroon/15 pt-16">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-maroon">
                03 · Face and frame
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-maroon sm:text-4xl">
                Which glass suits which face
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                These references are a professional starting point. A round
                face often likes a straighter rim, a square jaw often likes a
                curve, and a longer face often wants a deeper lens. Try the
                pair. The bridge and the power still decide.
              </p>
            </Reveal>
            <div className="mt-10">
              <FaceStudio />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
