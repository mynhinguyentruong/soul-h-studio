"use client";
import Image from "next/image";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardBlockquote,
} from "@/components/ui/card";

import ImageOne from "@/public/project_images/vinh_phe_la/1.jpg";
import ImageTwo from "@/public/project_images/vinh_phe_la/2.jpg";
import ImageThree from "@/public/project_images/vinh_phe_la/3.jpg";
import ImageFour from "@/public/project_images/vinh_phe_la/4.jpg";
import ImageFive from "@/public/project_images/vinh_phe_la/5.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect } from "react";
import axios from "axios";

export default function Page({ params }: { params: { slug: string } }) {
  // send a set cookie request
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:3000/visited?id=${params.slug}`);
      } catch (error) {
        console.error("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <div className="my-16">
      <Card className="container transition-all hover:shadow-xl ">
        <CardHeader>
          <CardTitle className="uppercase tracking-wider font-sans text-[#c99e92]">
            VỊNH PHÊ LA
          </CardTitle>
          <CardBlockquote className="my-6 border-l-2 p-6 italic">
            Căn hộ lấy ý tưởng từ hình ảnh vùng vịnh với những đường cong mềm
            mại, được đất liền bao bọc an toàn và tạo cảm giác bình yên. Cái tên
            Vịnh Phê La như là một chốn riêng tư, một vùng đất ẩn náu của gia
            chủ. Trần và tường được thiết kế theo đường tròn đồng tâm, mô tả
            hình ảnh vùng vịnh. Quầy đảo bếp là điểm nhấn chính, là trung tâm
            của căn hộ, nơi mà mọi điểm nhìn trong căn nhà đều tập trung về 1
            hướng. Đây là nơi chủ nhà có thể sáng tạo ra các loại nước uống cho
            công việc của anh chị. Vì nhu cầu của chủ nhà đơn giản nên vị trí
            quầy đảo bếp cũng có thể dùng làm bàn ăn, bàn làm việc.... Vật liệu
            sàn đá cẩm thạch chẻ rối, màu sắc trung tính của tường và gỗ, điểm
            nhấn xanh trong không gian tạo cảm giác thư giãn, nhẹ nhàng. Soul H
            muốn cải tạo một không gian ở đáp ứng đủ công năng cần thiết nhưng
            vẫn tự do, phóng khoáng, không gò bó trong khuôn khổ.
          </CardBlockquote>
        </CardHeader>
        <CardContent className="font-sans font-light	 text-[#575757] text-sm leading-8 ">
          <p className="font-rubik ">
            Located at{" "}
            <span className="text-black underline underline-offset-4 decoration-muted-foreground">
              Vinhomes Central Park{" "}
            </span>
          </p>
          <p>
            Designed for{" "}
            <span className="text-black underline underline-offset-4 decoration-muted-foreground">
              chị Huynh Dung, anh Phú Đào
            </span>
          </p>
          <p>
            Established in{" "}
            <span className="text-black underline underline-offset-4 decoration-muted-foreground">
              2023
            </span>
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col container ">
        <div className="container flex justify-between p-12">
          <div className="w-[600px] ">
            <AspectRatioDemo src={ImageOne} />
          </div>

          <div className="w-[600px] ">
            <AspectRatioDemo src={ImageTwo} />
          </div>
        </div>
        <blockquote className="container ml-12 border-l-2 p-6 italic">
          Sảnh đón, phòng khách và bếp được chia không gian nhẹ nhàng bằng đường
          cong của sàn và trần.
        </blockquote>
      </div>

      <div className="flex flex-col container ">
        <div className="flex container justify-between p-12">
          <div className=" w-[370px] ">
            <AspectRatio ratio={9 / 16} className="bg-muted">
              <Image
                src={ImageThree}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="w-[370px] ">
            <AspectRatio ratio={9 / 16} className="bg-muted">
              <Image
                src={ImageFour}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className=" w-[370px] ">
            <AspectRatio ratio={9 / 16} className="bg-muted">
              <Image
                src={ImageFive}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <blockquote className="container ml-12 border-l-2 p-6 italic">
          Quầy đảo là &quot;linh hồn&quot; của căn nhà.
        </blockquote>
      </div>
    </div>
  );
}

function AspectRatioDemo({ src }: { src: string | StaticImport }) {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={src}
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
