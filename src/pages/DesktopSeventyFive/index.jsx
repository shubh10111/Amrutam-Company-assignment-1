import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Text, Img, SelectBox, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktopSeventyFivePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Find Expert Doctors for In-Clinic Sessions | SeventyFive</title>
        <meta
          name="description"
          content="Discover expert doctors for in-clinic sessions near you. Select by location, expertise, gender, and fees. Book video or chat consultations with top specialists."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-white-A700 pb-[303px] md:pb-5">
        {/* header navigation section */}
        <header className="flex items-end justify-between gap-5 bg-orange-50 p-[15px] md:flex-col">
          <div className="ml-[89px] flex w-[54%] items-center justify-between gap-5 md:ml-0 md:w-full md:flex-col">
            <Img
              src="images/img_image_45.png"
              alt="imagefortyfive"
              className="h-[49px] w-[39%] object-cover md:w-full"
            />
            <ul className="flex flex-wrap gap-10">
              <li>
                <a href="#" className="cursor-pointer self-end">
                  <Text
                    size="s"
                    as="p"
                    className="!font-dinpro capitalize !text-gray-800_01 hover:font-bold hover:!text-green-800"
                  >
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Heading size="md" as="h5" className="!font-dinprobold capitalize">
                    find doctors
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer self-end">
                  <Text
                    size="s"
                    as="p"
                    className="!font-dinpro capitalize !text-gray-800_01 hover:font-bold hover:!text-green-800"
                  >
                    About us{" "}
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-[89px] mt-2 flex gap-4 md:mr-0">
            <Button className="flex h-[56px] min-w-[118px] items-center justify-center rounded-[11px] border border-solid border-green-800 bg-orange-50 px-[29px] text-center font-dinpro text-2xl font-medium text-green-800 sm:px-5">
              Login
            </Button>
            <Button className="flex h-[56px] min-w-[163px] items-center justify-center rounded-[11px] bg-green-800 px-[35px] text-center font-dinpro text-2xl font-medium text-white-A700 sm:px-5">
              Sign-up
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-center">
          {/* search doctors section */}
          <div className="relative h-[221px] self-stretch bg-green-50 px-[107px] md:h-auto md:px-5">
            <div className="ml-[127px] h-[108px] w-[15%] rounded-[92px] bg-green-100_7f md:ml-0" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full max-w-[1218px] flex-col items-end gap-[11px]">
              <div className="flex items-start self-stretch md:flex-col">
                <Img
                  src="images/img_ellipse_716.png"
                  alt="image"
                  className="mb-2 h-[84px] flex-1 object-cover md:w-full md:self-stretch"
                />
                <Text
                  size="md"
                  as="p"
                  className="ml-4 text-center !font-gothamrounded capitalize tracking-[0.16px] !text-black-900_01 md:ml-0"
                >
                  Find expert Doctors for an In-clinic session here{" "}
                </Text>
                <Img
                  src="images/img_ellipse_718.png"
                  alt="image_one"
                  className="ml-6 h-[76px] flex-1 object-cover md:ml-0 md:w-full md:self-stretch"
                />
              </div>
              <div className="mr-[78px] flex w-[76%] items-start gap-[3px] md:mr-0 md:w-full md:flex-col">
                <div className="mt-[17px] flex flex-1 gap-2 md:flex-col md:self-stretch">
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[20px] w-[17px]" />}
                    getOptionLabel={(e) => (
                      <>
                        <div className="flex items-center">
                          <Img src="images/img_location.svg" alt="location" className="h-[24px] w-[24px]" />
                          <span>{e.label}</span>
                        </div>
                      </>
                    )}
                    name="location"
                    placeholder={`Select Location`}
                    options={dropDownOptions}
                    className="w-[30%] rounded-lg border border-solid border-blue_gray-100_01 bg-white-A700 px-[35px] py-[17px] font-inter text-base tracking-[0.08px] text-gray-600_01 md:w-full sm:px-5"
                  />
                  <Input
                    name="search"
                    placeholder={`eg. Doctor, specialisation, clinic name`}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e)}
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={28} fillColor="#1c1b1fff" />
                      ) : (
                        <Img
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                          className="h-[24px] w-[28px] cursor-pointer"
                        />
                      )
                    }
                    className="flex h-[54px] flex-grow items-center justify-center gap-[35px] rounded-[10px] border border-solid border-blue_gray-100 bg-white-A700 pl-[19px] pr-2.5 font-inter text-base tracking-[0.50px] text-gray-600"
                  />
                </div>
                <div className="h-[117px] w-[21%] rounded-[92px] bg-green-100_7f" />
              </div>
            </div>
          </div>

          {/* filter section */}
          <div className="flex justify-center self-stretch border border-solid border-gray-200 bg-white-A700 p-3.5">
            <div className="mx-auto flex w-full max-w-[965px] justify-between gap-5 self-end md:flex-col">
              <div className="flex w-[36%] justify-between gap-5 md:w-full">
                <SelectBox
                  indicator={
                    <Img src="images/img_arrowdown_gray_600_03.svg" alt="arrow_down" className="h-[5px] w-[12px]" />
                  }
                  name="expertise"
                  placeholder={`Expertise`}
                  options={dropDownOptions}
                  className="flex w-[42%] gap-px rounded-[7px] bg-gray-100 py-[9px] pl-[13px] pr-[35px] font-dinpro text-base font-medium text-gray-700 sm:pr-5"
                />
                <SelectBox
                  indicator={
                    <Img src="images/img_arrowdown_gray_600_03.svg" alt="arrow_down" className="h-[5px] w-[12px]" />
                  }
                  name="gender"
                  placeholder={`Gender`}
                  options={dropDownOptions}
                  className="flex w-[42%] gap-px rounded-[7px] bg-gray-100 py-[9px] pl-[13px] pr-[35px] font-dinpro text-base font-medium text-gray-700 sm:pr-5"
                />
              </div>
              <SelectBox
                indicator={
                  <Img src="images/img_arrowdown_gray_600_03.svg" alt="arrow_down" className="h-[5px] w-[12px]" />
                }
                name="fees"
                placeholder={`Fees`}
                options={dropDownOptions}
                className="flex w-[15%] gap-px rounded-[7px] bg-gray-100 py-[9px] pl-[15px] pr-[35px] font-dinpro text-base font-medium text-gray-700 md:w-full sm:pr-5"
              />
              <SelectBox
                indicator={
                  <Img src="images/img_arrowdown_gray_600_03.svg" alt="arrow_down" className="h-[5px] w-[12px]" />
                }
                name="languages"
                placeholder={`Languages`}
                options={dropDownOptions}
                className="flex w-[15%] gap-px rounded-[7px] bg-gray-100 py-[9px] pl-3 pr-[35px] font-dinpro text-base font-medium text-gray-700 md:w-full sm:pr-5"
              />
              <SelectBox
                indicator={
                  <Img src="images/img_arrowdown_gray_600_03.svg" alt="arrow_down" className="h-[5px] w-[12px]" />
                }
                name="allfilters"
                placeholder={`All filters`}
                options={dropDownOptions}
                className="flex w-[15%] gap-px rounded-[7px] bg-gray-300 py-[9px] pl-[13px] pr-[35px] font-dinpro text-base font-medium text-green-800 md:w-full sm:pr-5"
              />
            </div>
          </div>

          {/* quick filter buttons section */}
          <div className="mr-[121px] mt-[60px] flex w-[43%] gap-4 self-end md:mr-0 md:w-full md:flex-col md:p-5">
            <Button
              rightIcon={<Img src="images/img_close.svg" alt="close" className="h-[11px] w-[11px]" />}
              className="flex h-[45px] w-full flex-1 items-center justify-center gap-2.5 rounded-[22px] bg-green-50 px-[22px] text-center font-inter text-base tracking-[0.50px] text-black-900_01 md:self-stretch sm:px-5"
            >
              Hair care{" "}
            </Button>
            <Button
              rightIcon={<Img src="images/img_close.svg" alt="close" className="h-[11px] w-[11px]" />}
              className="flex h-[45px] w-full flex-1 items-center justify-center gap-2.5 rounded-[22px] bg-green-50 px-[23px] text-center font-inter text-base tracking-[0.50px] text-black-900_01 md:self-stretch sm:px-5"
            >
              Female
            </Button>
            <Button
              rightIcon={<Img src="images/img_close.svg" alt="close" className="h-[11px] w-[11px]" />}
              className="flex h-[45px] w-full flex-1 items-center justify-center gap-2.5 rounded-[22px] bg-green-50 px-[17px] text-center font-inter text-base tracking-[0.50px] text-black-900_01 md:self-stretch"
            >
              Rs.0-Rs.500
            </Button>
            <Button
              rightIcon={<Img src="images/img_close.svg" alt="close" className="h-[11px] w-[11px]" />}
              className="flex h-[45px] min-w-[104px] items-center justify-center gap-2.5 rounded-[22px] bg-green-50 px-5 text-center font-inter text-base tracking-[0.50px] text-black-900_01"
            >
              Hindi
            </Button>
          </div>

          {/* doctors list section */}
          <div className="mx-auto mt-[53px] flex w-full max-w-[1148px] gap-10 md:flex-col md:p-5">
            {[...Array(3)].map((d, index) => (
              <div
                key={"list45" + index}
                className="flex w-full flex-col justify-center gap-8 rounded-[30px] border border-solid border-gray-300_01 bg-orange-50 p-[26px] shadow-xs sm:p-5"
              >
                <div className="flex flex-col items-center gap-[15px]">
                  <div className="flex w-[52%] flex-col items-end md:w-full">
                    <Img
                      src="images/img_ellipse_725.png"
                      alt="image"
                      className="h-[150px] w-full rounded-[74px] object-cover md:h-auto"
                    />
                    <Button
                      rightIcon={
                        <Img
                          src="images/img_materialsymbolsstar.svg"
                          alt="material-symbols:star"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="relative mr-8 mt-[-24px] flex h-[28px] min-w-[70px] items-center justify-center gap-1 rounded-[14px] bg-gradient px-3 text-center font-dinprobold text-base font-bold tracking-[-0.16px] text-white-A700 md:mr-0"
                    >
                      4.5
                    </Button>
                  </div>
                  <div className="flex flex-col items-start gap-[5px] self-stretch">
                    <Heading size="lg" as="h1" className="tracking-[-0.32px] !text-blue_gray-900">
                      Dr. Prerna Narang
                    </Heading>
                    <div className="flex flex-col items-center gap-3.5 self-stretch">
                      <div className="flex flex-col items-start gap-1.5">
                        <div className="flex items-start gap-[15px]">
                          <Img src="images/img_frame.svg" alt="image_one" className="h-[16px] w-[16px]" />
                          <Text as="p" className="tracking-[-0.16px] !text-gray-700_02">
                            Male-Female Infertility
                          </Text>
                        </div>
                        <div className="flex items-center gap-[7px]">
                          <Img src="images/img_frame_green_800.svg" alt="image_two" className="h-[24px] w-[24px]" />
                          <Heading size="s" as="h2" className="self-end tracking-[-0.16px] !text-gray-700_02">
                            7 years of Experience
                          </Heading>
                        </div>
                        <div className="flex items-start gap-3">
                          <Img src="images/img_comment_1.png" alt="image_three" className="h-[16px] object-cover" />
                          <Text as="p" className="tracking-[-0.16px]">
                            Speaks: English, Hindi, Marathi
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-evenly gap-2 self-stretch">
                        <div className="flex flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-green-800_63 bg-orange-50 p-1">
                          <Heading as="h3" className="tracking-[-0.14px] !text-gray-800">
                            Video Consultation
                          </Heading>
                          <Heading as="h4" className="!font-bold tracking-[-0.14px]">
                            ₹800
                          </Heading>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-green-800_63 bg-orange-50 p-1">
                          <Heading as="h5" className="tracking-[-0.14px] !text-gray-800">
                            Chat Consultation
                          </Heading>
                          <Heading as="h6" className="!font-bold tracking-[-0.14px]">
                            Free
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px]">
                  <Button className="flex h-[42px] w-full items-center justify-center rounded-lg border border-solid border-green-800 bg-white-A700 px-[34px] text-center text-base font-semibold tracking-[-0.16px] text-green-800 sm:px-5">
                    View Profile
                  </Button>
                  <Button className="flex h-[53px] w-full items-center justify-center rounded-lg bg-green-800 px-[35px] text-center text-base font-semibold tracking-[-0.16px] text-white-A700 sm:px-5">
                    Book a consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
