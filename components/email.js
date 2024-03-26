import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const EmailSection = () => {
  return (
    <>
      <section className=" mt-20 mb-10">
        <div className="container flex items-center flex-col m-20">
          <h1 className=" text-4xl p-3 font-playfair">
            Subscribe Now for Exclusive Early Access!
          </h1>
          <div className="flex flex-col gap-4 w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="outline-2 outline text-xl p-3" />
            <Input type="text" placeholder="Company Url" className="outline-2 outline text-xl p-3" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailSection;
