import { Transition } from "@headlessui/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import { AccordionCallToAction, AccordionCallToActionItemContinents, AccordionCallToActionItemCountries, AccordionCallToActionCountriesData } from '@/components/ui/accordionCallToAction'
import Button from "./shared/button";

import { CardCallToActionButton } from '@/components/ui/card-call-to-action'

const ContinentsData: AccordionCallToActionItemContinents[] = [
  { continent: "AFRICA" },
  { continent: "ASIA" },
  { continent: "EUROPE" },
  { continent: "OCEANIA" },
  { continent: "PANAMERICA" },
];

const CountriesData: AccordionCallToActionCountriesData = {
  AFRICA: [
    {
      "Country": "Algeria",
      "Email": "irbo.nord31@gmail.com",
      "Federation": "Algerian Federation of Kickboxing, MMA & Similar Sports",
      "Icon": "ALGERIA-AFKMDA-icon-only.webp"
    },
    {
      "Country": "Angola",
      "Email": "famma.angola@gmail.com",
      "Federation": "Associação Provincial de MMA de Luanda",
      "Icon": "Angola-APMMAL-icon-only.webp"
    },
    {
      "Country": "Cameroon",
      "Email": "nlmmacam@gmail.com",
      "Federation": "Mixed Martial Arts Cameroon",
      "Icon": "Cameroon-400x283-1.webp"
    },
    {
      "Country": "Cote D'Ivoire",
      "Email": "fiammciv@gmail.com",
      "Federation": "Federation Ivoirienne D Arts Martiaux Mixtes",
      "Icon": "COTE-DOCOIVOIRE-FIAMM-icon-only.webp"
    },
    {
      "Country": "Democratic Republic of Congo",
      "Email": "rdcfecamm@gmail.com",
      "Federation": "Democratic Republic of Congo MMA Federation",
      "Icon": "Congo-400x283-1.webp"
    },
    {
      "Country": "Egypt",
      "Email": "mma.egypt@outlook.com",
      "Federation": "Egyptian MMA Committee",
      "Icon": "Egypt-400x283-1.webp"
    },
    {
      "Country": "Ghana",
      "Email": "ghammaf@yahoo.com",
      "Federation": "Ghana Mixed Martial Arts Federation",
      "Icon": "Ghana-400x283-1.webp"
    },
    {
      "Country": "Guinea",
      "Email": "mamadykeita69@gmail.com",
      "Federation": "Guinean Federation of Krav-Maga and Associated Disciplines",
      "Icon": "GUINEA-GSKMAD-icon-only.webp"
    },
    {
      "Country": "Mauritius",
      "Email": "ramtohulavinash@yahoo.com",
      "Federation": "Mixed Martial Arts Federation Mauritius",
      "Icon": "Mauritius-400x283-1.webp"
    },
    {
      "Country": "Morocco",
      "Email": "contact@frmsclm.ma",
      "Federation": "Fédération Royale Marocaine Du Sport de Combat Libre Et Mixte",
      "Icon": "MOROCCO-FRMSCLM-icon-only.webp"
    },
    {
      "Country": "Namibia",
      "Email": "kickfederation@gmail.com",
      "Federation": "Namibian MMA Federation",
      "Icon": "NAMIBIA-NMMAF-icon-only.webp"
    },
    {
      "Country": "Nigeria",
      "Email": "nigeriammaf@gmail.com",
      "Federation": "Nigerian Mixed Martial Arts Federation",
      "Icon": "NIGERIA-NMMAF-icon-only.webp"
    },
    {
      "Country": "Senegal",
      "Email": "lfcsenegal.event@gmail.com",
      "Federation": "MMA Senegal",
      "Icon": "SENEGAL-MMAS-icon-only.webp"
    },
    {
      "Country": "South Africa",
      "Email": "secretary@mma-sa.co.za",
      "Federation": "Mixed Martial Arts & Submission Grappling Association of Seychelles",
      "Icon": "South-Africa-400x283-1.webp"
    },
    {
      "Country": "The Seychelles",
      "Email": "mmaseychelles@outlook.com",
      "Federation": "Mixed Martial Arts South Africa",
      "Icon": "Seychelles-400x283-1.webp"
    },
    {
      "Country": "Tunisia",
      "Email": "tunisian.mma.association@gmail.com",
      "Federation": "Tunisian Mixed Martial Arts Federation",
      "Icon": "Tunisia-TMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Zambia",
      "Email": "zambia.mma@gmail.com",
      "Federation": "Mixed Martial Arts Zambia",
      "Icon": "ZAMBIA-ZMMAA-icon-only.webp"
    },
    {
      "Country": "Zimbabwe",
      "Email": "bkademaunga@gmail.com",
      "Federation": "Zimbabwe Mixed Martial Arts Association",
      "Icon": "Zimbabwe-ZMMAA-icon-only.webp"
    },
    {
      "Country": "Madagascar",
      "Email": "spvfelana@gmail.com",
      "Federation": "Mixte Martial Art Madagascar",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    }
  ],
  ASIA: [
    {
      "Country": "Afghanistan",
      "Email": "afghan.mma@gmail.com",
      "Federation": "Afghanistan MMA Federation",
      "Icon": "Afganistan-AMMAF_ICON-ONLY-289x205-1.webp"
    },
    {
      "Country": "Bahrain",
      "Email": "MQamber@bmmaf.bh",
      "Federation": "Bahrain Mixed Martial Arts Federation",
      "Icon": "BAHRAIN-290x205-1.webp"
    },
    {
      "Country": "China",
      "Email": "hanjiuli@163.com",
      "Federation": "MMA Department Of Chinese Boxing Federation",
      "Icon": "china-ICON-ONLY.webp"
    },
    {
      "Country": "Hong Kong",
      "Email": "admin@hkmmaf.com",
      "Federation": "Hong Kong MMA Federation Ltd",
      "Icon": "Hong-Kong-289x205-1.webp"
    },
    {
      "Country": "India",
      "Email": "asdkarate@gmail.com",
      "Federation": "MMA India - National Sports Federation",
      "Icon": "INDIA-MMAI-icon-only.webp"
    },
    {
      "Country": "Indonesia",
      "Email": "hari@kobi.or.id",
      "Federation": "Komite Olahraga Beladiri Indonesia",
      "Icon": "Indonesia-290x205-1.webp"
    },
    {
      "Country": "Iran",
      "Email": "mmairanf@gmail.com",
      "Federation": "Iranian MMA Federation",
      "Icon": "Iran-IRMMAA_ICON-ONLY-289x205-1.webp"
    },
    {
      "Country": "Iraq",
      "Email": "ahmad_jmil2000@yahoo.com",
      "Federation": "Iraq Champion Fighting Cage",
      "Icon": "IRAQ-ICFC-icon-only.webp"
    },
    {
      "Country": "Japan",
      "Email": "hidetakafukui@gmail.com",
      "Federation": "Japan Mixed Martial Arts Federation",
      "Icon": "JAPAN-JMMAF-icon-only.webp"
    },
    {
      "Country": "Jordan",
      "Email": "taherhamdan86@gmail.com",
      "Federation": "Jordan Mixed Martial Arts Federation",
      "Icon": "JORDAN-290x205-1.webp"
    },
    {
      "Country": "Kazakhstan",
      "Email": "info@kazmma.kz",
      "Federation": "Kazakh National Public Union of Mixed Martial Arts",
      "Icon": "Kazakhstan-KZMMAF_ICON-ONLY-289x205-1.webp"
    },
    {
      "Country": "Kuwait",
      "Email": "abdullah.alaskari@ufcgym.me",
      "Federation": "MMA Kuwait Association",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Kyrgyzstan",
      "Email": "pankration_mma@mail.ru",
      "Federation": "Republic Of Kyrgyzstan Federation Of MMA And Pankration",
      "Icon": "Kyrgystan-RKFMMAP_ICON-ONLY-289x205-1.webp"
    },
    {
      "Country": "Lebanon",
      "Email": "info@lmmaf.org",
      "Federation": "Lebanese MMA Federation",
      "Icon": "LEBANON-290x205-1.webp"
    },
    {
      "Country": "Malaysia",
      "Email": "officialmasmmaa@gmail.com",
      "Federation": "Malaysia Mixed Martial Arts Association",
      "Icon": "MALAYSIA-290x205-1.webp"
    },
    {
      "Country": "Mongolia",
      "Email": "mongol.mma@gmail.com",
      "Federation": "Mongolian Mixed Martial Arts Federation",
      "Icon": "Mongolia-MMMAF-icon-only.webp"
    },
    {
      "Country": "Nepal",
      "Email": "nmgc.nsc@gmail.com",
      "Federation": "Nepal National Martial Art Games Confederation",
      "Icon": "Nepal-290x205-1.webp"
    },
    {
      "Country": "Pakistan",
      "Email": "abidjahangir96@gmail.com",
      "Federation": "Mixed Martial Arts Pakistan",
      "Icon": "PAKISTAN-290x205-1.webp"
    },
    {
      "Country": "Philippines",
      "Email": "aguilar.alvin@gmail.com",
      "Federation": "Philippines Mixed Martial Arts Federation",
      "Icon": "PHILIPPINES-PMMAF-icon-only.webp"
    },
    {
      "Country": "Saudia Arabia",
      "Email": "info@smmaf.sa",
      "Federation": "Saudi Mixed Martial Arts Federation",
      "Icon": "SAUDI-ARABIA-SAUMMAF-icon-only.webp"
    },
    {
      "Country": "Sri Lanka",
      "Email": "daido@sltnet.lk",
      "Federation": "Mixed Martial Arts Federation Sri Lanka",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Taiwan",
      "Email": "Kamamara0920@yahoo.com.tw",
      "Federation": "Chinese Taipei Mixed Martial Arts Association",
      "Icon": "CHINESE-TAIPEI-CTMMAA-icon-only.webp"
    },
    {
      "Country": "Tajikistan",
      "Email": "farrux.halimov@tajmma.tj",
      "Federation": "Federation Of Mixed Martial Arts Of The Republic Of Tajikistan",
      "Icon": "Tajikistan-290x205-1.webp"
    },
    {
      "Country": "United Arab Emirates",
      "Email": "mjalhousani@gmail.com",
      "Federation": "UAE Jiu-Jitsu and Mixed Martial Arts Federation",
      "Icon": "UAE-UAEMMFF-icon-only-1.webp"
    },
    {
      "Country": "Uzbekistan",
      "Email": "uz.ummaa@gmail.com",
      "Federation": "Uzbekistan MMA Association",
      "Icon": "Uzbekistan-USMMAA_ICON-ONLY-289x205-1.webp"
    },
    {
      "Country": "Vietnam",
      "Email": "info.vmmaf@gmail.com",
      "Federation": "Vietnam MMA Federation",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Singapore",
      "Email": "admin@mmaas.com.sg",
      "Federation": "Mixed Martial Arts Association of Singapore",
      "Icon": "SINGAPORE-290x205-1.webp"
    },
    {
      "Country": "Thailand",
      "Email": "jitinat_a@jslglobalmedia.com",
      "Federation": "",
      "Icon": "THAILAND-290x205-1.webp"
    },
    {
      "Country": "South Korea",
      "Email": "kimse7942@hanmail.net",
      "Federation": "",
      "Icon": "SOUTH-KOREA-290x205-1.webp"
    },
    {
      "Country": "Turkmenistan",
      "Email": "tkmmmaf@mail.ru",
      "Federation": "Federation of Mixed Martial Arts of Turkmenistan",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    }
  ],
  EUROPE: [
    {
      "Country": "Albania",
      "Email": "arjan_rizaj@hotmail.com",
      "Federation": "Albanian Free Fighting Federation",
      "Icon": "Albania-400x283-1.webp"
    },
    {
      "Country": "Armenia",
      "Email": "garegin.aghabalyan@gmail.com",
      "Federation": "MMA Federation of Armenia",
      "Icon": "ARMENIA-MMAFA-ICON-ONLY-model-only-400x283-1.webp"
    },
    {
      "Country": "Austria",
      "Email": "ettl@mma-verband.at",
      "Federation": "Austrian Mixed Martial Arts Federation",
      "Icon": "Austria-400x283-1.webp"
    },
    {
      "Country": "Azerbaijan",
      "Email": "rovshan.gasanov.azmmaf@gmail.com",
      "Federation": "Azerbai̇jan Mixed Martial Arts Federation",
      "Icon": "Azerbaijan-400x283-1.webp"
    },
    {
      "Country": "Belgium",
      "Email": "bmmaf.org@gmail.com",
      "Federation": "Belgian Mixed Martial Arts Federation",
      "Icon": "BELGIUM-BMMAF-icon-only.webp"
    },
    {
      "Country": "Bosnia & Herzegovina",
      "Email": "mmasavezbih@gmail.com",
      "Federation": "MMA Savez Bosne i Hercegovine",
      "Icon": "BOSNIA-AND-HERZEGOVINA-Icon1.webp"
    },
    {
      "Country": "Bulgaria",
      "Email": "bfmma@abv.bg",
      "Federation": "Bulgarian Mixed Martial Arts Federation",
      "Icon": "Bulgaria-400x283-1.webp"
    },
    {
      "Country": "Croatia",
      "Email": "mario.jurkovic@hotmail.com",
      "Federation": "Croatia MMA Federation",
      "Icon": "Croatia-CMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Cyprus",
      "Email": "angelis93_boom@hotmail.com",
      "Federation": "Cyprus Mixed Martial Arts Federation",
      "Icon": "Cyprus-CMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Czechia",
      "Email": "michal.hamrsmid@gmail.com",
      "Federation": "Czech Association of MMA",
      "Icon": "Czech-Republic-400x283-1.webp"
    },
    {
      "Country": "Denmark",
      "Email": "info@dmmaf.dk",
      "Federation": "Danish Mixed Martial Arts Federation",
      "Icon": "Denmark-400x283-1.webp"
    },
    {
      "Country": "England",
      "Email": "info@englishmma.org",
      "Federation": "England Mixed Martial Arts Association",
      "Icon": "ENGLAND-EMMAA-icon-only.webp"
    },
    {
      "Country": "Estonia",
      "Email": "ott@mma.ee",
      "Federation": "Estonian Mixed Martial Arts Federation",
      "Icon": "Estonia-400x283-1.webp"
    },
    {
      "Country": "Finland",
      "Email": "aleksi.kainulainen@ruoppaajat.fi",
      "Federation": "Suomen Vapaaotteluliitto ry",
      "Icon": "Finland-FMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "France",
      "Email": "lionel.brezephin@ff-boxe.com",
      "Federation": "Federation Francaise de Boxe",
      "Icon": "France-400x283-1.webp"
    },
    {
      "Country": "Georgia",
      "Email": "info.gmmaf@gmail.com",
      "Federation": "National Federation of Universal Martial Arts",
      "Icon": "GEORGIA-GMMAFC-icon-only.webp"
    },
    {
      "Country": "Germany",
      "Email": "werner@gemmaf.de",
      "Federation": "German Mixed Martial Arts Federation",
      "Icon": "Germany-400x283-1.webp"
    },
    {
      "Country": "Greece",
      "Email": "e_fasi@hotmail.com",
      "Federation": "Panhellenic MMA Federation",
      "Icon": "Greece-GWMMA_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Hungary",
      "Email": "valerpapp@gmail.com",
      "Federation": "Hungarian MMA Federation",
      "Icon": "Hungary-400x283-1.webp"
    },
    {
      "Country": "Iceland",
      "Email": "halli@nelson.is",
      "Federation": "Iceland MMA Federation",
      "Icon": "Iceland-400x283-1.webp"
    },
    {
      "Country": "Israel",
      "Email": "ido.isrmmaf@gmail.com",
      "Federation": "Mixed Martial Arts Federation Israel",
      "Icon": "IL-icon-only.webp"
    },
    {
      "Country": "Italy",
      "Email": "info@figmma.it",
      "Federation": "Federazione Italiana Grappling Mixed Martial Arts",
      "Icon": "Italy-400x283-1.webp"
    },
    {
      "Country": "Kosovo",
      "Email": "fammk.kos@gmail.com",
      "Federation": "Federation Federata Arteve Mikse Marciale",
      "Icon": "KOSOVO-FAMMK-icon-only.webp"
    },
    {
      "Country": "Latvia",
      "Email": "itf.latvia@gmail.com",
      "Federation": "Latvian MMA Association / Latvijas MMA Asociācija",
      "Icon": "Latvia-LMMAA_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Lithuania",
      "Email": "deimante.smirnovaite@gmail.com",
      "Federation": "Lithuanian Mixed Martial Arts Federation",
      "Icon": "Lithuania-400x283-1.webp"
    },
    {
      "Country": "Luxembourg",
      "Email": "fedluxmma@gmail.com",
      "Federation": "Fédération Luxembourgeoise de MMA",
      "Icon": "Luxembourg-400x283-1.webp"
    },
    {
      "Country": "Malta",
      "Email": "kcmifsud123@gmail.com",
      "Federation": "Malta Mixed Martial Arts Association",
      "Icon": "Malta-MMMAA-icon-only.webp"
    },
    {
      "Country": "Moldova",
      "Email": "mixfight.md@gmail.com",
      "Federation": "Moldovan MMA Federation",
      "Icon": "MOLDOVA-MMMAF-icon-only.webp"
    },
    {
      "Country": "Montenegro",
      "Email": "mmasavezcrnegore@gmail.com",
      "Federation": "MMA Federation of Montenegro",
      "Icon": "MONTENEGRO-MMMAF-icon-only.webp"
    },
    {
      "Country": "Netherlands",
      "Email": "Info@nlmmaf.nl",
      "Federation": "Nederland MMA Federation",
      "Icon": "NETHERLANDS-MMAAN-icon-only.webp"
    },
    {
      "Country": "Northern Ireland",
      "Email": "b4-mma@ntlworld.com",
      "Federation": "Ulster Amateur MMA Association",
      "Icon": "Ulster-N-Ireland-UAMMAA_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Norway",
      "Email": "post@nmmaf.no",
      "Federation": "Norwegian Mixed Martial Arts Federation",
      "Icon": "Norway-400x283-1.webp"
    },
    {
      "Country": "Poland",
      "Email": "info@mmapolska.org",
      "Federation": "Stowarzyszenie MMA Polska",
      "Icon": "Poland-400x283-1.webp"
    },
    {
      "Country": "Portugal",
      "Email": "geral@portugal-wrestling.org",
      "Federation": "Federação Portugusea de Lutas Amadoras",
      "Icon": "Portugal-400x283-1.webp"
    },
    {
      "Country": "Republic of Ireland",
      "Email": "aisling@mmaireland.ie",
      "Federation": "Irish Mixed Martial Arts Association",
      "Icon": "Ireland2-400x283-1.webp"
    },
    {
      "Country": "Romania",
      "Email": "secretariat@frkempo.ro",
      "Federation": "Romanian Kempo Mixed Martial Arts Federation",
      "Icon": "ROMANIA-RKMMAF-icon-only.webp"
    },
    {
      "Country": "Scotland",
      "Email": "mmafscotland@gmail.com",
      "Federation": "Mixed Martial Arts Federation Of Scotland",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Serbia",
      "Email": "mmasavezsrbije@gmail.com",
      "Federation": "Serbian MMA Federation",
      "Icon": "Serbia-SMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Slovakia",
      "Email": "info@szmma.sk",
      "Federation": "Slovakian MMA Association",
      "Icon": "Slovakia-SMMAA_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Slovenia",
      "Email": "board.smmaa@gmail.com",
      "Federation": "Slovenia MMA Federation",
      "Icon": "Slovenia-New.webp"
    },
    {
      "Country": "Spain",
      "Email": "fel@felucha.com",
      "Federation": "Española de Lucha Olímpica y Disciplinas Asociadas",
      "Icon": "Spain-400x283-1.webp"
    },
    {
      "Country": "Sweden",
      "Email": "info@smmaf.se",
      "Federation": "Swedish Mixed Martial Arts Federation",
      "Icon": "Sweden-400x283-1.webp"
    },
    {
      "Country": "Switzerland",
      "Email": "info@mmasf.org",
      "Federation": "Federation Switzerland Mixed Martial Arts",
      "Icon": "Switzerland-400x283-1.webp"
    },
    {
      "Country": "Turkey",
      "Email": "azamatgashimov1990@gmail.com",
      "Federation": "Turkey Combat Mixed Martial Arts Sport Association",
      "Icon": "Turkey-TMASDF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Ukraine",
      "Email": "anton.a.blank@gmail.com",
      "Federation": "MMA League of Ukraine",
      "Icon": "Ukraine-400x283-1.webp"
    },
    {
      "Country": "Wales",
      "Email": "cageandscreen@gmail.com",
      "Federation": "Mixed Martial Arts Cymru",
      "Icon": "Wales-MMACym-399x283-1.webp"
    },
    {
      "Country": "Macedonia",
      "Email": "ivica.jkdmk@gmail.com",
      "Federation": "Macedonia MMA Federation",
      "Icon": "Macedonia-IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    }
  ],
  OCEANIA: [
    {
      "Country": "Australia",
      "Email": "ausmmafed@gmail.com",
      "Federation": "International Mixed Martial Arts Federation of Australia",
      "Icon": "Australia-400x283-1.webp"
    },
    {
      "Country": "French Polynesia",
      "Email": "ctffplajda@gmail.com",
      "Federation": "Fédération Polynésienne de Lutte, MMA, BJJ et Disciplines Associées",
      "Icon": "FRENCH-POLYNESIA-FPLAJDA-icon-only.webp"
    },
    {
      "Country": "New Zealand",
      "Email": "terryphill@yahoo.com.au",
      "Federation": "New Zealand MMA Federation",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    }
  ],
  PANAMERICA: [
    {
      "Country": "Argentina",
      "Email": "maximaro31@icloud.com",
      "Federation": "Argentine Association of Mixed Martial Arts and Contact Sports",
      "Icon": "ARGENTINA-AAAMM-icon-only.webp"
    },
    {
      "Country": "Aruba",
      "Email": "caribbeanmmafederation@gmail.com",
      "Federation": "Milliard Academy",
      "Icon": "ARUBA-AMMAF-icon-only.webp"
    },
    {
      "Country": "Bahamas",
      "Email": "info@empiremmabahamas.com",
      "Federation": "Empire Mixed Martial Arts Bahamas",
      "Icon": "BAHAMAS-400x283-1.webp"
    },
    {
      "Country": "Barbados",
      "Email": "barbadosmma@gmail.com",
      "Federation": "Barbados Mixed Martial Arts Federation",
      "Icon": "BARBADOS-BMMAF-icon-only.webp"
    },
    {
      "Country": "Belize",
      "Email": "info@mma.bz",
      "Federation": "MMA Federation of Belize",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Bolívia",
      "Email": "yerkocastro41@gmail.com",
      "Federation": "Bolivian Martial Mixed Arts Federation",
      "Icon": "BOLIVIA-BMMAF-icon-only.webp"
    },
    {
      "Country": "Brazil",
      "Email": "csampaio@cabmma.org.br",
      "Federation": "Comissão Atlética Brasileira de MMA",
      "Icon": "BRAZIL-400x283-1.webp"
    },
    {
      "Country": "Canada",
      "Email": "microstretching@gmail.com",
      "Federation": "Mixed Martial Arts – Canada",
      "Icon": "CANADA-400x283-1.webp"
    },
    {
      "Country": "Colombia",
      "Email": "ocammcolombia@gmail.com",
      "Federation": "Asociación Colombiana de Artes Marciales Mixtas",
      "Icon": "COLOMBIA-OCAMM-icon-only.webp"
    },
    {
      "Country": "Costa Rica",
      "Email": "manda01@hotmail.com",
      "Federation": "Federacion de Artes Marciales Mixtas",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Dominican Republic",
      "Email": "ligadeoro.mmado@gmail.com",
      "Federation": "Federation Dominicana de Artes Marciale Mixtas",
      "Icon": "DOMINICAN-REPUBLIC-FDAMM-icon-only.webp"
    },
    {
      "Country": "Ecuador",
      "Email": "emmafederation@gmail.com",
      "Federation": "Ecuador Mixed Martial Arts Federation",
      "Icon": "ECUADOR-EMMAF-icon-only.webp"
    },
    {
      "Country": "El Salvador",
      "Email": "betancourt.carlos.2014@gmail.com",
      "Federation": "Federacion Salvadoreña de Kickboxing & MMA",
      "Icon": "EL-SALVADOR-400x283-1.webp"
    },
    {
      "Country": "Grenada",
      "Email": "earle.finlay@gmail.com",
      "Federation": "Grenada Mixed Martial Arts Federation",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    },
    {
      "Country": "Guatemala",
      "Email": "senseiucelo@gmail.com",
      "Federation": "Asociación Guatemalteca de Artes Marciales Mixtas",
      "Icon": "GUATEMALA-AGAMM-icon-only.webp"
    },
    {
      "Country": "Guyana",
      "Email": "gmajor2012@gmail.com",
      "Federation": "Guyana Mixed Martials Federation",
      "Icon": "GUYANA-GMMF-icon-only.webp"
    },
    {
      "Country": "Jamaica",
      "Email": "chackowilmotd@gmail.com",
      "Federation": "MMA Jamaica Sports Federation",
      "Icon": "JAMAICA-400x283-1.webp"
    },
    {
      "Country": "Mexico",
      "Email": "fammejl@gmail.com",
      "Federation": "Federacion de Artes Marciales Mixtas Equidad y Juego Limpio",
      "Icon": "MEXICO-400x283-1.webp"
    },
    {
      "Country": "Panama",
      "Email": "anmmapanama@gmail.com",
      "Federation": "Asociación Nacional de mixed martial arts Panamá",
      "Icon": "Panama-ANMMAP_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Paraguay",
      "Email": "fepaamm@gmail.com",
      "Federation": "Paraguayan federation of Mixed Martial Arts",
      "Icon": "PARAGUAY-400x283-1.webp"
    },
    {
      "Country": "Puerto Rico",
      "Email": "antoniojcesani@yahoo.com",
      "Federation": "Federacion Independiente de Artes Marciales Mixtas de Puerto Rico",
      "Icon": "PUERTO-RICO-FIAMMPR-icon-only.webp"
    },
    {
      "Country": "Saint Martin",
      "Email": "mlondonsxm@gmail.com",
      "Federation": "Sint Maarten Martial Arts",
      "Icon": "Sint-Maarten-SMMA-icon-only.webp"
    },
    {
      "Country": "St Lucia",
      "Email": "luciabgladiators@gmail.com",
      "Federation": "St Lucia Mixed Martial Arts Federation",
      "Icon": "ST-LUCIA-SLMMAF-icon-only.webp"
    },
    {
      "Country": "Trinidad and Tobago",
      "Email": "bagowarriors@gmail.com",
      "Federation": "Trinidad and Tobago Mixed Martial Arts Federation",
      "Icon": "TRINIDAD-AND-TOBAGO-400x283-1.webp"
    },
    {
      "Country": "Uruguay",
      "Email": "lummaap@outlook.com",
      "Federation": "Asociacion Uruguaya de Artes Marciales Mixtas Amateur y Profesional",
      "Icon": "URUGUAY-UAMMAA-icon-only.webp"
    },
    {
      "Country": "USA",
      "Email": "jon@fightleague.org",
      "Federation": "United States Fight League",
      "Icon": "USA-UMMAF_ICON-ONLY-399x283-1.webp"
    },
    {
      "Country": "Venezuela",
      "Email": "info.fevamm@gmail.com",
      "Federation": "Federación Venezolana de Artes Marciales Mixtas",
      "Icon": "VENEZUELA-FEVAMM-icon-only.webp"
    },
    {
      "Country": "Peru",
      "Email": "mijailiberico@hotmail.com",
      "Federation": "Asociacion Peruana de Mixed Martial Arts",
      "Icon": "IMMAF-blk-Globe_ICON-ONLY-400x283-1.webp"
    }
  ],
};

interface DialogCTAProps {
  title: string;
  btnLabel: string;
}

const DialogCTA = (props: DialogCTAProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {/* <Button>Open {props.btnLabel} Dialog</Button> */}
        <CardCallToActionButton>
          {props.btnLabel}
        </CardCallToActionButton>
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className="fixed w-full h-full inset-0 z-20 bg-[var(--background-grey-95)]" // bg-[var(--background-grey-95)]
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            {/* <Dialog.Overlay className="fixed z-50 inset-0 top-0 left-0 right-0 bottom-0 pt-[120px] grid place-items-center overflow-y-auto bg-white/50 dark:bg-neutral-900/95"> */}
              <Dialog.Content
                forceMount
                className={clsx(
                  "fixed z-50",
                  "min-w-[95vw] max-w-[95vw] min-h-[5vh] rounded-xl my-[20px]", // my-[20px]
                  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "bg-neutral-900 border-2 border-fuchsia-700/50",
                  //"bg-neutral-100 dark:bg-neutral-900 border-2 border-fuchsia-700/50",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  "overflow-auto" // Add this line to the className
                )}
              >
                <div className={clsx(
                  "flex flex-col items-center min-w-full h-full max-h-[85vh]",
                  "px-10 py-10",  // mt-12
                  )}>
                  <Dialog.Title className="pb-4 text-xl text-center text-neutral-100"> {/* // text-neutral-900 */}
                    Request that your Federation join MMAPP
                  </Dialog.Title>
                  <Dialog.Description className="py-4 pb-8 text-md text-center font-normal text-neutral-400"> {/* //text-neutral-700 */}
                    Contact your National Federation and request that they join MMAPP.<br/>
                  </Dialog.Description>

                  <div className={clsx(
                  "flex flex-col inset-0 items-center w-full h-full overflow-y-auto", // mt-12
                  )}>
                    <AccordionCallToAction ContinentsData={ContinentsData} CountriesData={CountriesData} />
                  </div>
                  {/* <div className="mt-4 flex justify-end">
                    <Dialog.Close
                      className={clsx(
                        "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                        "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-neutral-100 dark:hover:bg-purple-600",
                        "border border-transparent",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                      )}
                    >
                      Save
                    </Dialog.Close>
                  </div> */}

                  <Dialog.Close
                    className={clsx(
                      "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  >
                    <Cross1Icon className="h-4 w-4 text-neutral-500 hover:text-neutral-400" /> {/* //text-neutral-500 hover:text-neutral-700 */}
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            {/* </Dialog.Overlay> */}
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { DialogCTA };

