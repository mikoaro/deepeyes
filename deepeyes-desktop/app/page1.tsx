import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Radio, Rocket } from "lucide-react";
import Link from "next/link";
import HomeHeader from "@/components/home-header";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function HomePage() {
  return (
    <section className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="bg-gray-200">
        <section className="w-full bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto grid gap-8 px-40 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:leading-tight">
                Monitor your security cameras with locally processed AI
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Deepeyes is an open source NVR built around real-time AI
                  object detection. All processing is performed locally on your
                  own hardware, and your camera feeds never leave your home.
                </p>
                <p>
                  Get access to custom models designed specifically with
                  Deepeyes.
                </p>
              </div>
              <Link href="/app">
                <Button variant="secondary" size="lg" className="mt-2">
                  Try Deepeyes
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/hero.webp"
                alt="Security camera interface showing multiple camera feeds in a grid layout"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Feature Section */}

        {/* Dashboard Section */}
        <section className="container mx-auto px-40 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                Deepeyes Dashboard
              </h2>
              <p className="text-lg text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque aliquam nemo sapiente totam quas nobis, accusamus
                placeat iure vel libero aperiam fugiat quos dolore corporis
                veniam possimus, architecto consequuntur aspernatur!
              </p>
              <ul className="space-y-4">
                {["Live Chat", "Connect gateways and devices to Deepeyes"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <div className="flex gap-4">
                <Link href="/app">
                  <Button size="lg">Start Now</Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/dashboard.png"
                alt="LoRaWAN Platform Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Alerting and Automation Section */}
        <section className="container mx-auto px-40 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/alerts.png"
                alt="Industrial IoT Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                Alerting and Automation
              </h2>
              <p className="text-lg text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque aliquam nemo sapiente totam quas nobis, accusamus
                placeat iure vel libero aperiam fugiat quos dolore corporis
                veniam possimus, architecto consequuntur aspernatur!
              </p>
              <ul className="space-y-4">
                {[
                  "Device Alert",
                  "Connect gateways and devices to Deepeyes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link href="/app/review">
                  <Button size="lg">Start Now</Button>
                </Link>

                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Explorer Section */}
        <section className="container mx-auto px-40 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                Explorer
              </h2>
              <p className="text-lg text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque aliquam nemo sapiente totam quas nobis, accusamus
                placeat iure vel libero aperiam fugiat quos dolore corporis
                veniam possimus, architecto consequuntur aspernatur!
              </p>
              <ul className="space-y-4">
                {[
                  "Search for footages and images",
                  "Connect gateways and devices to Deepeyes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
              <Link href="/app/explorer">
                  <Button size="lg">Start Now</Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/explorer.png"
                alt="LoRaWAN Platform Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="container mx-auto px-40 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/events.png"
                alt="Industrial IoT Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                Events
              </h2>
              <p className="text-lg text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque aliquam nemo sapiente totam quas nobis, accusamus
                placeat iure vel libero aperiam fugiat quos dolore corporis
                veniam possimus, architecto consequuntur aspernatur!
              </p>
              <ul className="space-y-4">
                {[
                  "List of Events",
                  "Connect gateways and devices to Deepeyes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link href="/app/events">
                  <Button size="lg">Start Now</Button>
                </Link>

                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

         {/* Connect Iot Device Section */}
         <section className="bg-slate-900 px-4 py-16">
      <div className="container mx-auto px-40">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Connect any IoT Device</h2>
          <p className="text-lg text-slate-300">
            Next to deep LoRaWAN Integration you can connect your IoT Devices using the following Integrations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="relative bg-white">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto -mt-12 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <Radio className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">MQTT</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-sm text-slate-600">
                Connect your brokers and subscribe to any topic. Includes payload decoders and downlink for your MQTT
                devices.
              </p>
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card className="relative bg-white">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto -mt-12 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <Rocket className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Webhook</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-sm text-slate-600">
                Send data to your devices on Deepeyes via webhook. Payload decoders for HTTP requests are also available
                here.
              </p>
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card className="relative bg-white">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto -mt-12 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <Rocket className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">GraphQL</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-sm text-slate-600">
                Using GraphQL API, write metrics or automate the entire platform as well as the deployment of your
                devices.
              </p>
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

        <section className="py-16 bg-gray-50 flex justify-center mx-auto text-center gap-5">
          <div className="">
            <div className="">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Ready to launch your SaaS?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Our template provides everything you need to get your SaaS up
                  and running quickly. Don&apos;t waste time on boilerplate -
                  focus on what makes your product unique.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 flex justify-center lg:justify-center">
                <a href="" target="_blank">
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center mt-10">
                    View the code
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
