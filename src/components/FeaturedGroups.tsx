import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GroupCard from "./GroupCard";
import Loader from "./Loader";
import { Autoplay } from "swiper/modules";
import { Group } from "../types/group";

const FeaturedGroups: React.FC = () => {
  const [groupsData, setGroupsData] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://hobbyhub-server-omega.vercel.app/groups")
      .then((res) => res.json())
      .then((data: Group[]) => {
        setLoading(false);
        setGroupsData(data.slice(0, 6)); // Limit to first 6 items
      });
  }, []);
  if (loading) return <Loader />;
  else
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000, // 3 seconds
          disableOnInteraction: false,
        }}
      >
        {groupsData.map((group: Group) => (
          <SwiperSlide>
            <GroupCard key={group._id} group={group} hideBtn={true}></GroupCard>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default FeaturedGroups;
