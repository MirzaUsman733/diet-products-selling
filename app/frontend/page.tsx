import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import Carousel from "@/app/components/homePageComponents/Carousel";

export default function page() {
  const carouselItems = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aCUyMG1laWRjaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
      caption: "Caption 1",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512867957657-38dbae50a35b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aCUyMG1laWRjaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
      caption: "Caption 2",
    },
  ];
  return (
    <>
      <Carousel />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste
            quos suscipit tempora? Aperiam esse fugiat inventore laboriosam
            officiis quam rem!
          </p>
          <p>
            At consectetur delectus ducimus est facere iure molestias obcaecati
            quaerat vitae voluptate? Aspernatur dolor explicabo iste minus
            molestiae pariatur provident quibusdam saepe?
          </p>
          <p>
            Laborum molestias neque nulla obcaecati odio quia quod reprehenderit
            sit vitae voluptates? Eos, tenetur.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <div className="container container-xl mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: 200 }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
