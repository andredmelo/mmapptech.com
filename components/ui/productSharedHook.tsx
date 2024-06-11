
import React, { useEffect, useState, useTransition } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import { ProductTitlesItem } from '@/components/ui/productTitlesFC'

const useProductSharedHook = () => {

  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isUnder480 = useMediaQuery('(max-width: 479px)');
  const isUnder640 = useMediaQuery('(max-width: 639px)');
  const isUnder768 = useMediaQuery('(max-width: 767px)');
  const isUnder1024 = useMediaQuery('(max-width: 1023px)');
  const isUnder1280 = useMediaQuery('(max-width: 1279px)');
  const isUnder1536 = useMediaQuery('(max-width: 1535px)');

  const [dashboard, setDashboard] = useState("");
  const [dashboardMembers, setDashboardMembers] = useState("");
  const [activeTabProductJudge, setActiveTabProductJudge] = useState('ProductJudge1');
  const [activeTabProductRecordKeeper, setActiveTabProductRecordKeeper] = useState('ProductRecordKeeper1')
  const [isPending, startTransition] = useTransition();
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Judge and RecordKeeper descriptions
  const descriptionSrcMapJudge: Record<string, string> = {
    'ProductJudge1': 'Assess Fights with the MMAPP Methodology',
    'ProductJudge2': 'Submit Scores Instantly',
    'ProductJudge3': 'Personalised Fight Card',
    'ProductJudge4': 'Make more informed decisions',
    'ProductJudge5': 'Share your results with your colleagues',
    'ProductJudge6': 'Personal Lifetime archive of your results',
  };
  const descriptionSrcMapRecordKeeper: Record<string, string> = {
    'ProductRecordKeeper1': 'Master Timing duties like never before',
    'ProductRecordKeeper2': 'Record every fight detail Number of Breaks, Break Duration, Reasons for Point deductions, etc.',
    'ProductRecordKeeper3': 'Receive and Calculate scorecards automatically and get the results instantly',
    'ProductRecordKeeper4': 'Automatically send the results to the Federation',
  };

  // Judge and RecordKeeper images loading
  useEffect(() => {
    const imagesJudge = ['ProductJudge1', 'ProductJudge2', 'ProductJudge3', 'ProductJudge4', 'ProductJudge5', 'ProductJudge6'];
    const imagesRecordKeeper = ['ProductRecordKeeper1', 'ProductRecordKeeper2', 'ProductRecordKeeper3', 'ProductRecordKeeper4'];
    const newPreloadedImages: Record<string, HTMLImageElement> = {};

    const imageSrcMapJudge: Record<string, string> = {
      'ProductJudge1': 'productJudge-1',
      'ProductJudge2': 'productJudge-2',
      'ProductJudge3': 'productJudge-3',
      'ProductJudge4': 'productJudge-4',
      'ProductJudge5': 'productJudge-5',
      'ProductJudge6': 'productJudge-6',
    };
    const imageSrcMapRecordKeeper: Record<string, string> = {
      'ProductRecordKeeper1': 'productRecordKeeper-1',
      'ProductRecordKeeper2': 'productRecordKeeper-2',
      'ProductRecordKeeper3': 'productRecordKeeper-3',
      'ProductRecordKeeper4': 'productRecordKeeper-4',
    };

    imagesJudge.forEach((image) => {
      const img = new Image();
      img.src = `/images/product/officialsJudge/${imageSrcMapJudge[image as keyof typeof imageSrcMapJudge]}.webp`;
      newPreloadedImages[image] = img;
    });

    imagesRecordKeeper.forEach((image) => {
      const img = new Image();
      img.src = `/images/product/officialsRecordKeeper/${imageSrcMapRecordKeeper[image as keyof typeof imageSrcMapRecordKeeper]}.webp`;
      newPreloadedImages[image] = img;
    });

    setPreloadedImages(newPreloadedImages);
  }, []);

  // Use the isLoading state to delay the change of the activeTabProductJudge and activeTabProductRecordKeeper states
  const selectTabProductJudge = (tab: string) => {
    setIsLoading(true);
    startTransition(() => {
      setActiveTabProductJudge(tab);
      setTimeout(() => {
        setIsLoading(false);
      }, 50);
    });
  };
  const selectTabProductRecordKeeper = (tab: string) => {
    setIsLoading(true); // Assuming you have an isLoading state to manage the loading indicator
    startTransition(() => {
      setActiveTabProductRecordKeeper(tab);
      // Introduce a delay before setting isPending to false
      setTimeout(() => {
        setIsLoading(false); // Turn off loading indicator after a delay
      }, 50); // Adjust the delay as needed
    });
  }

  // Delay the change of the isLoading state
  useEffect(() => {
    let timeoutId: any;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 50);
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);


  // Dashboard and Dashboard Members titles
  const productDashboardItems: ProductTitlesItem[] = [
    { header: "User-friendly interface" },
    { header: "Straightforward registration form management" },
    { header: "Easily approve or reject Applications" },
    { header: "Deep analysis on fights and scoring" },
    { header: "Intuitive Reports and Insights" },
    { header: "Seamless Event Approval Process" },
    { header: "Paperless management" },
  ];
  const productDashboardMembersItems: ProductTitlesItem[] = [
    { header: "Quick sign-up process" },
    { header: "Intuitive Profile Management" },
    { header: "Multi-user management for Clubs and Coaches" },
    { header: "View Membership standing - Documents in order, information updated, etc." },
    { header: "Receive reminders for document expiration" },
    { header: "Competition Eligilibillity status for Athletes and Coaches" },
    { header: "Athletes are part of a centralized athlete database, available to Promoters" },
    { header: "Promoters can Submit Event hosting applications to Federations in under 5 minutes" },
    { header: "Promoters can view all athletes registered with the Federation, eligible for competitions" },
    { header: "View Scheduled Fights" },
    { header: "View Lifetime career history and statistics" },
  ];

  // Dashboard and DashboardMembers videos loading
  useEffect(() => {
    let dashboard = "/videos/product/dashboard/dashboard.1280x716.x264.CRF26.veryslow.high-1280w.mp4";
    if (isUnder480) {
      dashboard = "/videos/product/dashboard/dashboard.480x268.x264.CRF26.veryslow.high-480w.mp4";
    } else if (isUnder640) {
      dashboard = "/videos/product/dashboard/dashboard.640x358.x264.CRF26.veryslow.high-640w.mp4";
    } else if (isUnder768) {
      dashboard = "/videos/product/dashboard/dashboard.768x430.x264.CRF26.veryslow.high-768w.mp4";
    } else if (isUnder1024) {
      dashboard = "/videos/product/dashboard/dashboard.1024x572.x264.CRF26.veryslow.high-1024w.mp4";
    }
    setDashboard(dashboard);

    let dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.768x492.x264.CRF27.veryslow.high-768w.mp4";
    if (isUnder1024) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.480x308.x264.CRF26.veryslow.high-480w.mp4";
    } else if (isUnder1280) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.640x410.x264.CRF26.veryslow.high-640w.mp4";
    } else if (isUnder1536) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.768x492.x264.CRF27.veryslow.high-768w.mp4";
    }
    if (isPortrait) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.1024x656.x264.CRF27.veryslow.high-1024w.mp4";
    } else if (isPortrait && isUnder640) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.480x308.x264.CRF26.veryslow.high-480w.mp4";
    } else if (isPortrait && isUnder768) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.640x410.x264.CRF26.veryslow.high-640w.mp4";
    } else if (isPortrait && isUnder1024) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.768x492.x264.CRF27.veryslow.high-768w.mp4";
    } else if (isPortrait && isUnder1280) {
      dashboardMembers = "/videos/product/dashboardMembers/dashboardMembers.1024x656.x264.CRF27.veryslow.high-1024w.mp4";
    }
    setDashboardMembers(dashboardMembers);
  }, [isUnder1536, isUnder1280, isUnder1024, isUnder768, isUnder640, isUnder480, isPortrait]);



  return {
    activeTabProductJudge,
    activeTabProductRecordKeeper,
    productDashboardItems,
    productDashboardMembersItems,
    dashboard,
    dashboardMembers,
    isPending,
    preloadedImages,
    isLoading,
    setIsLoading,
    descriptionSrcMapJudge,
    descriptionSrcMapRecordKeeper,
    selectTabProductJudge,
    selectTabProductRecordKeeper,
  };
};

export default useProductSharedHook;