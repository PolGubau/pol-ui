import HorizontalTitle from "@/components/horizontal-title/HorizontalTitle";

export default async function CatalogPage() {
  const cards = [
    {
      endTranslateX: 20,
      rotate: 30,
      src: "https://picsum.photos/200/300",
      alt: "image 1",
      className: "top-1/2 left-[20%]",
    },

    {
      endTranslateX: 40,
      rotate: 60,
      src: "https://picsum.photos/200/300",
      alt: "image 2",
      className: "top-[5%] left-[40%]",
    },
    {
      endTranslateX: 20,
      rotate: -90,
      src: "https://picsum.photos/200/300",
      alt: "image 3",
      className: "bottom-[10%] left-[60%]",
    },
    {
      endTranslateX: -50,
      rotate: 50,
      src: "https://picsum.photos/200/300",
      alt: "image 4",
      className: "top-[15%] left-[75%]",
    },
  ];
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center overflow-x-hidden">
      <div className="w-full min-h-[800vh]">
        <HorizontalTitle title="Catalog" cards={cards} />

        {/*  */}
        <section className="absolute top-[150vh] h-screen w-screen flex flex-col gap-4 overflow-x-hidden justify-center items-center">
          <h1
            className=" text-white text-[40px] text-center m-0  w-max
          "
          >
            Text lorem lorem lorem
          </h1>
          <img
            src="https://picsum.photos/200/300"
            alt="image 1"
            className="w-48 object-cover"
          />
        </section>
      </div>
    </div>
  );
}
