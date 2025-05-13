import { Stack, Flex, Text, Paper, Group } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import classes from "../AIBillTracker.module.css"
import { Link } from "../../../lib/components/Link"
import { Sidebar } from "../../../lib/molecules/Sidebar"
import React from "react"
import { Button } from "../../../lib/components/Button"
import { Menu } from "../../../lib/components/Menu"
import { Divider } from "../../../lib/components/Divider"
import { SegmentedControl } from "../../../lib/components/SegmentedControl"
import { Card } from "../../../lib/components/Card"
import { Avatar } from "../../../lib/components/Avatar"
import { Badge } from "../../../lib/components/Badge"
import { TextField } from "../../../lib/components/TextField"
import { Collapse } from "../../../lib/components/Collapse"
import { Notification } from "../../../lib/components/Notification"
import { Tooltip } from "../../../lib/components/Tooltip"
import {
    ArrowLeftFAIcon,
    ArrowRightFarFAIcon,
    AngleDownFarFAIcon,
    CheckFarFAIcon,
    MinusSolidFAIcon,
    ThumbsDownFarFAIcon,
    SparklesFarFAIcon,
    ThumbsUpFarFAIcon,
    CircleFarFAIcon,
    XMarkFarFAIcon,
    PaperPlaneTopFarFAIcon,
    CircleArrowRightFarFAIcon,
    CircleArrowDownFarFAIcon,
    CircleArrowUpFarFAIcon,
    ListFarFAIcon,
    PlusFarFAIcon,
    ArrowUpRightAndArrowDownLeftFromCenterFarFAIcon,
    CodeCompareFarFAIcon,
    PenNibFarFAIcon,
    CircleInfoFarFAIcon,
    MagnifyingGlassFarFAIcon,
} from "../../../lib/components/Icons"
import { lstat } from "fs"

export function ReviewMode() {
    const navigate = useNavigate();
    const [summaryType, setSummaryType] = React.useState("ai");
    const [textValue, setTextValue] = React.useState("");
    const [compareActionsOpen, setCompareActionsOpen] = React.useState(true);
    const [generateActionsOpen, setGenerateActionsOpen] = React.useState(true);
    const [showNotification, setShowNotification] = React.useState(false);
    const [impactChecked, setImpactChecked] = React.useState(false);
    const [impactButtonText, setImpactButtonText] = React.useState("Impact your industry");
    const [impactButtonIcon, setImpactButtonIcon] = React.useState<React.ComponentType<any>>(CircleFarFAIcon);
    const textFieldRef = React.useRef<HTMLTextAreaElement>(null);

    // Mock data for officials/sponsors
    const sponsorData = [
        {
            id: 1,
            officialData: {
                name: "Sen. Angela Alsobrooks (D-MD)",
                avatarSrc: "https://static.quorum.us/global/common/images/person/1/3569354_v2.jpg",
                party: "democrat"
            },
            title: "Primary sponsor",
            org: "US Senate"
        },
        {
            id: 2,
            officialData: {
                name: "Rep. Tammy Baldwin (D-WI)",
                avatarSrc: "https://static.quorum.us/global/common/images/person/1/400013_v2.jpg",
                party: "democrat"
            },
            title: "Co-sponsor",
            org: "US House"
        }
    ];

    return (
        <Stack gap={0} h={"100vh"}>
            <Flex
                align={"center"}
                justify={"space-between"}
                className={classes.customTopNav}
            >
                <Flex>
                    <a href="/">
                        <svg aria-hidden="true" focusable="false" data-prefix="q" data-icon="quorum-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 27" data-auto-cy="AtomIcon" id="ds-icon"><path fill="currentColor" d="M27.72,18.789a12.856,12.856,0,0,0,-10.735,-1.897l-2.847,0.764a4.803,4.803,0,1,1,-1.234,-9.444c0.831,0,1.652,0.219,2.391,0.646a4.771,4.771,0,0,1,2.236,2.916a4.77,4.77,0,0,1,-0.224,3.131a14.8,14.8,0,0,1,1.629,-0.247a6.228,6.228,0,0,0,0.004,-3.262a6.222,6.222,0,0,0,-2.915,-3.803a6.211,6.211,0,0,0,-4.748,-0.625a6.216,6.216,0,0,0,-3.8,2.919a6.268,6.268,0,0,0,5.42,9.396c0.535,0,1.078,-0.07,1.618,-0.215l2.848,-0.764a11.404,11.404,0,0,1,9.52,1.683a0.729,0.729,0,0,0,1.016,-0.18a0.73,0.73,0,0,0,-0.18,-1.017 M26.885967,22.264173 L26.0524974,21.6799643 C26.051593,21.6792861 26.0503496,21.6788339 26.0494452,21.6781557 C25.9290539,21.5882861 25.8059496,21.5035035 25.682393,21.4197383 C25.6228191,21.3794948 25.5630191,21.3399296 25.502767,21.3010426 C25.4185496,21.2466687 25.3334278,21.1938774 25.2477409,21.1423296 C25.1715496,21.096547 25.0952452,21.0514426 25.0181496,21.0080339 C24.948967,20.9689209 24.8792191,20.9310513 24.8092452,20.893747 C24.7137235,20.8428774 24.6176365,20.7929122 24.5206452,20.7454339 C24.4694365,20.7203383 24.4177757,20.696147 24.3661148,20.6719557 C24.249793,20.6175817 24.1329061,20.5645643 24.0146626,20.5150513 C23.9825583,20.5014861 23.9501148,20.4885991 23.9178974,20.4754861 C23.7806626,20.4197557 23.6427496,20.366173 23.503593,20.3169991 C23.490367,20.3123643 23.4770278,20.3079557 23.4639148,20.3033209 C22.1664017,19.8494513 20.7855757,19.6801122 19.4037322,19.8161035 C19.3733235,19.8191557 19.3429148,19.8240165 19.3125061,19.8271817 C19.1709757,19.8423296 19.0297843,19.858947 18.8887061,19.8804252 C18.7916017,19.8952339 18.6948365,19.9146774 18.5979583,19.9325383 C18.5222191,19.9464426 18.4462539,19.9580861 18.3706278,19.9737991 C18.1945061,20.0106513 18.0186104,20.0524774 17.843167,20.0995035 L14.9954887,20.8632252 C10.674967,22.022373 6.21551478,19.445773 5.05749739,15.1195991 C3.89948,10.7936513 6.47336696,6.33114696 10.7953583,5.17177304 C15.1173496,4.01296435 19.5755583,6.58911217 20.7335757,10.91506 C21.059593,12.1337817 21.0955409,13.3917296 20.8545322,14.601747 C21.3438974,14.6192687 21.8313409,14.6618861 22.31528,14.7280165 C22.5656713,13.3492252 22.5133322,11.9217122 22.1427757,10.5372687 C20.7767583,5.43324261 15.5159409,2.39350348 10.41768,3.76110348 C5.31862783,5.12870348 2.28194087,10.3938165 3.64829739,15.4978426 C5.01442783,20.6017557 10.274567,23.6410426 15.373393,22.2738948 L18.2210713,21.51006 C20.6444974,20.8605122 23.1869583,21.3530426 25.19608,22.8622861 C25.1996974,22.8648861 25.2035409,22.8665817 25.2070452,22.8690687 C25.2100974,22.8713296 25.2123583,22.8741557 25.2155235,22.8764165 L26.048993,23.4606252 C26.17628,23.5498165 26.3223322,23.59266 26.4668017,23.59266 C26.6967322,23.59266 26.9231583,23.4841383 27.0650278,23.2813383 C27.2962017,22.9509122 27.2158278,22.495573 26.885967,22.264173 M18.7015739,23.2672983 L15.8538957,24.031133 C12.9051565,24.8218722 9.82426957,24.4161591 7.17995652,22.8880374 C4.53575652,21.3598026 2.64431304,18.8922896 1.85402609,15.9402722 C1.06385217,12.9879157 1.46933913,9.90454174 2.9959913,7.2576287 C4.52264348,4.61071565 6.98766957,2.71746348 9.93708696,1.92638522 C16.0252696,0.293924348 22.3058522,3.92307217 23.9369565,10.017133 C24.3849478,11.6908548 24.4494957,13.3986026 24.1404348,15.0571765 C24.6134087,15.1843504 25.0808435,15.3349243 25.5407043,15.5094635 C25.9300261,13.5806026 25.8683043,11.5891157 25.3462696,9.63911565 C23.5068261,2.76720261 16.4253304,-1.32666696 9.5594087,0.515715652 C6.23378261,1.40774174 3.45393043,3.54256783 1.73250435,6.52736783 C0.0109652174,9.51194174 -0.446295652,12.9892722 0.444713043,16.3180635 C1.33583478,19.6471939 3.46873913,22.4296461 6.45048696,24.1527678 C8.43677391,25.3008374 10.6408957,25.8869678 12.8745217,25.8869678 C13.9939913,25.8869678 15.1212609,25.7395591 16.231687,25.4418026 L19.0793652,24.6779678 C20.6242174,24.2637765 22.2685478,24.6451852 23.4766435,25.6986374 C23.7805043,25.9633852 24.2411565,25.9319591 24.5060174,25.6277591 C24.7706522,25.3235591 24.738887,24.8623417 24.4351391,24.5974809 C22.8597652,23.2240026 20.7162348,22.7264983 18.7015739,23.2672983"></path></svg>
                    </a>
                </Flex>
                <Flex
                    align={"center"}
                    gap={"xs"}
                    className={classes.searchBar}
                >
                    <i><MagnifyingGlassFarFAIcon /></i>
                    <input placeholder="Search" />
                </Flex>
                <Flex justify={"flex-end"}>
                    <Avatar
                        src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"}
                        alt="John Doe"
                        size="sm"
                    />
                </Flex>
            </Flex>
            <Stack className={classes.pageLayout}>
                <Flex
                    pt={64}
                    pb={16}
                    h={"100%"}
                    w={"100%"}
                    gap={0}
                    className={classes.pageBody}
                >
                    <Sidebar
                        activeItem="copilothub"
                        onItemClick={() => console.log("Copilot Hub clicked")}
                    />
                    <Flex className={classes.main} h={"100%"} w={"100%"}>
                        <Stack className={classes.pageContent}>
                            <Stack gap={"md"}>
                                <Stack className={classes.reviewModePage}>
                                    <Stack className={classes.reviewModeSection} pt={0} px={0}>
                                        <Stack className={classes.reviewModeHeading}>
                                            <Flex w={"100%"} align={"center"} justify={"space-between"}>
                                                <div>
                                                    <Link
                                                        variant="inline"
                                                        onClick={() => navigate("/AIBillTracker/TrackingBoard")}
                                                        c={"white"}
                                                        aria-label="Back to view mode"
                                                    >
                                                        Back to view mode
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Text size="lg" fw={500} lh={"1.5rem"} c={"white"}>
                                                        Triage mode
                                                    </Text>
                                                </div>
                                                <div>
                                                    <Menu
                                                        withSearch
                                                        searchPlaceholder="Search tracking boards"
                                                    >
                                                        <Menu.Target>
                                                            <Button
                                                                variant="tertiary"
                                                                size="sm"
                                                                onClick={() => console.log("Select tracking board")}
                                                                aria-label="Select tracking board"
                                                                rightSection={<AngleDownFarFAIcon size="12" />}
                                                            >
                                                                Health Coverage and Care
                                                            </Button>
                                                        </Menu.Target>
                                                        <Menu.Dropdown>
                                                            <Menu.Item>
                                                                Tracking Board #1
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #2
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #3
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #4
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #5
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #6
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #7
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #8
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #9
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #10
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #11
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #12
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #13
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #14
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                Tracking Board #15
                                                            </Menu.Item>
                                                        </Menu.Dropdown>
                                                    </Menu>
                                                </div>
                                            </Flex>
                                        </Stack>
                                        <Stack className={classes.billsQueue}>
                                            <Flex gap={"md"} align={"center"} justify={"space-between"} w={"100%"}>
                                                <Flex gap={"1rem"} align={"center"} w={"100%"}>
                                                    <Button
                                                        variant="tertiary"
                                                        size="sm"
                                                        onClick={() => console.log("Previous")}
                                                        aria-label="Previous"
                                                    >
                                                        <ArrowLeftFAIcon />
                                                    </Button>
                                                    <Stack gap={"xxs"}>
                                                        <Text fw={500}  size="xs" lh={"1rem"} c={"gray.6"} lts={"0.025rem"}>
                                                            1 bill in queue
                                                        </Text>
                                                        <Text fw={500} size="lg" lh={"1.5rem"} c={"gray.9"} lts={"0.01875rem"}>
                                                            OH H.B.7: Enact the Strong Foundations Act
                                                        </Text>
                                                    </Stack>
                                                </Flex>
                                                <Link>
                                                    View bill
                                                </Link>
                                                <Button
                                                    variant="tertiary"
                                                    size="sm"
                                                    onClick={() => console.log("Previous")}
                                                    aria-label="Previous"
                                                >
                                                    <ArrowRightFarFAIcon />
                                                </Button>
                                            </Flex>
                                            <Divider />
                                            <Flex gap={"0.5rem"}>
                                                <Paper className={classes.innerPaper}>
                                                    <Flex gap={"xl"}>
                                                        <Text size="xs" c={"gray.6"} lts={"0.025rem"} fw={500} lh={"1rem"}>
                                                            To review it (0/3):
                                                        </Text>
                                                        <Stack gap={"xs"}>
                                                            <Flex gap={"xs"} align={"center"}>
                                                                <div className={classes.reviewModeStepCheck}>
                                                                    <Text c={"white"}>
                                                                        <CheckFarFAIcon size={10} />
                                                                    </Text>
                                                                </div>
                                                                <Text size="xs" c={"gray.7"} lts={"0.025rem"} fw={500} lh={"1rem"}>
                                                                    Select the Bill stance
                                                                </Text>
                                                            </Flex>
                                                            <Flex gap={"xs"} align={"center"}>
                                                                <div className={classes.reviewModeStepCheck}>
                                                                    <Text c={"white"}>
                                                                        <CheckFarFAIcon size={10} />
                                                                    </Text>
                                                                </div>
                                                                <Text size="xs" c={"gray.7"} lts={"0.025rem"} fw={500} lh={"1rem"}>
                                                                    Set the priority
                                                                </Text>
                                                            </Flex>
                                                            <Flex gap={"xs"} align={"center"}>
                                                                <div className={classes.reviewModeStepCheck}>
                                                                    {impactChecked && (
                                                                        <Text c={"white"}>
                                                                            <CheckFarFAIcon size={10} />
                                                                        </Text>
                                                                    )}
                                                                </div>
                                                                <Text size="xs" c={"gray.7"} lts={"0.025rem"} fw={500} lh={"1rem"}>
                                                                    Define if it impact your industry
                                                                </Text>
                                                            </Flex>
                                                        </Stack>
                                                    </Flex>
                                                </Paper>
                                                <Paper className={`${classes.innerPaper} ${classes.reviewModeMatch}`}>
                                                    <Stack gap={"xxs"}>
                                                        <Text c={"gray.7"} lh={"1.25rem"} fw={500} lts={"0.01563rem"} size="sm">
                                                            <Flex align={"center"} gap={"xxs"}>
                                                                <SparklesFarFAIcon filled size={12} />
                                                                <span>97% match:</span>
                                                            </Flex>
                                                        </Text>
                                                        <Text c={"gray.7"} lh={"1rem"} fw={400} lts={"0.025rem"} size="xs">
                                                            It supports Medicare negotiation for lower insulin prices—directly tied to your interest in "insulin affordability".
                                                        </Text>
                                                    </Stack>
                                                </Paper>
                                            </Flex>
                                        </Stack>
                                    </Stack>
                                    <Stack className={classes.reviewModeSection}>
                                        <Flex gap={"xs"} align={"center"} className={classes.reviewModeBillFilters}>
                                            <Menu>
                                                <Menu.Target>
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        onClick={() => console.log("Stance clicked")}
                                                        aria-label="Set bill stance"
                                                        leftSection={<ThumbsUpFarFAIcon />}
                                                    >
                                                        <Flex align={"center"} gap={"xxs"}>
                                                            <span>Support</span>
                                                            <AngleDownFarFAIcon size="12" />
                                                        </Flex>
                                                    </Button>
                                                </Menu.Target>
                                                <Menu.Dropdown>
                                                    <Menu.Item
                                                        leftSection={<ThumbsUpFarFAIcon />}
                                                    >
                                                        Support
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<ThumbsDownFarFAIcon />}
                                                    >
                                                        Oppose
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<CircleArrowRightFarFAIcon />}
                                                    >
                                                        Neutral
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<MinusSolidFAIcon />}
                                                    >
                                                        Unimportant
                                                    </Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu>
                                            <Menu>
                                                <Menu.Target>
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        onClick={() => console.log("Priority clicked")}
                                                        aria-label="Set bill priority"
                                                        leftSection={<CircleArrowUpFarFAIcon />}
                                                    >
                                                        <Flex align={"center"} gap={"xxs"}>
                                                            <span>High</span>
                                                            <AngleDownFarFAIcon size="12" />
                                                        </Flex>
                                                    </Button>
                                                </Menu.Target>
                                                <Menu.Dropdown>
                                                    <Menu.Item
                                                        leftSection={<CircleArrowDownFarFAIcon />}
                                                    >
                                                        Low
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<CircleArrowRightFarFAIcon />}
                                                    >
                                                        Medium
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<CircleArrowUpFarFAIcon />}
                                                    >
                                                        High
                                                    </Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu>
                                            <Menu>
                                                <Menu.Target>
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        onClick={() => console.log("Impact clicked")}
                                                        aria-label="Set industry impact"
                                                        leftSection={React.createElement(impactButtonIcon)}
                                                    >
                                                        <Flex align={"center"} gap={"xxs"}>
                                                            <span>{impactButtonText}</span>
                                                            <AngleDownFarFAIcon size="12" />
                                                        </Flex>
                                                    </Button>
                                                </Menu.Target>
                                                <Menu.Dropdown>
                                                    <Menu.Item
                                                        leftSection={<CheckFarFAIcon />}
                                                        onClick={() => {
                                                            setImpactChecked(true);
                                                            setImpactButtonText("Yes, impacts industry");
                                                            setImpactButtonIcon(CheckFarFAIcon);
                                                            setShowNotification(true);
                                                            setTimeout(() => setShowNotification(false), 3000);
                                                        }}
                                                    >
                                                        Yes
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<XMarkFarFAIcon />}
                                                    >
                                                        No
                                                    </Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu>
                                        </Flex>
                                        <Stack className={classes.billMainSection}>
                                            <Stack gap={"xs"} align="flex-start">
                                                <SegmentedControl
                                                    data={[
                                                        {
                                                            label: (
                                                                <Flex align="center" gap="xxs">
                                                                    <SparklesFarFAIcon filled size={12} />
                                                                    <span>AI summary</span>
                                                                </Flex>
                                                            ),
                                                            value: "ai"
                                                        },
                                                        {
                                                            label: "Official summary",
                                                            value: "official"
                                                        },
                                                    ]}
                                                    defaultValue="ai"
                                                    size="sm"
                                                    onChange={(value) => setSummaryType(value)}
                                                />

                                                <Stack className={classes.summaryContent}>
                                                    {/* AI Summary Content */}
                                                    <Text c="gray.7" size="sm" lh="1.5" style={{ display: summaryType === "ai" ? "block" : "none" }}>
                                                        The legislation establishes a Veterinary Medicine Loan Redemption Program within the Higher Education Student Assistance Authority (HESAA) to address the shortage of large animal veterinarians in New Jersey. The program aims to incentivize veterinarians to work in underserved areas by offering loan redemption for those who commit to five years of full-time service at approved sites. These sites must be located within or near state-designated veterinary underserved areas, which are identified annually by the Secretary of Agriculture in consultation with relevant veterinary and agricultural organizations. Eligible participants must be state residents and licensed veterinarians, or in the process of becoming licensed, and must dedicate at least 75% of their work to large animal veterinary care.
                                                    </Text>

                                                    {/* Official Summary Content */}
                                                    <Text c="gray.7" size="sm" lh="1.5" style={{ display: summaryType === "official" ? "block" : "none" }}>
                                                        These sites must be located within or near state-designated veterinary underserved areas, which are identified annually by the Secretary of Agriculture in consultation with relevant veterinary and agricultural organizations. Eligible participants must be state residents and licensed veterinarians, or in the process of becoming licensed, and must dedicate at least 75% of their work to large animal veterinary care.
                                                    </Text>
                                                    <Link>Show more</Link>
                                                </Stack>
                                            </Stack>
                                            <Stack className={classes.billSponsorsSection}>
                                                <Text size="md" fw={500} c={"gray.9"}>Sponsors (2)</Text>
                                                <Flex className={classes.billSponsorsCards}>
                                                    {sponsorData.map(sponsor => (
                                                        <Card
                                                            key={sponsor.id}
                                                            icon={
                                                                <Avatar
                                                                    src={sponsor.officialData.avatarSrc}
                                                                    size="md"
                                                                    variant={sponsor.officialData.party as "democrat" | "republican" | "default"}
                                                                />
                                                            }
                                                            title={
                                                                <Stack gap={"xs"} my={"auto"} mih={"3rem"} justify="center">
                                                                    <Text fw={500} c="gray.9" lh={1}>{sponsor.officialData.name}</Text>
                                                                    <Text c="gray.7" lh={1} size="sm">{sponsor.title}</Text>
                                                                </Stack>
                                                            }
                                                            variant="dataset"
                                                            onClick={() => console.log("Official card clicked")}
                                                            className={classes.billSponsorCard}
                                                        />
                                                    ))}
                                                </Flex>
                                            </Stack>
                                            <Stack className={classes.billSnippetsSection}>
                                                <Text size="md" fw={500} c={"gray.9"}>Snippet</Text>
                                                <Stack className={classes.billSnippets}>
                                                    <Text c="gray.7" size="sm" lh="1.5">
                                                        Legislators have introduced new provisions to enhance <mark>voting access for individuals with mobility challenges</mark>, including measures for remote ballot marking, audio-enabled voting systems, and curbside options. The proposal also includes a provision to improve access to affordable <mark>insulin</mark> for individuals with disabilities, recognizing the disproportionate burden of chronic conditions in these communities [...]
                                                    </Text>
                                                </Stack>
                                            </Stack>
                                            {/* <Divider />
                                            <Stack className={classes.billSnippetsSection}>
                                                <Text size="md" fw={500} c={"gray.9"}>Custom fields</Text>
                                            </Stack> */}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack className={classes.copilotDrawer}>
                            <Stack gap={0}>
                                <Flex className={classes.copilotHeading}>
                                    <Flex align={"center"} gap={"xs"}>
                                        <Text c={"gray.9"} fw={500} size="md">Quorum Copilot</Text>
                                        <Badge variant="outline-2" size="sm">Beta</Badge>
                                    </Flex>
                                    <Group gap="xs">
                                        <Tooltip label="Open in full screen" position="bottom">
                                            <Button
                                                variant="tertiary"
                                                onClick={() => console.log("Copilot full screen clicked")}
                                            >
                                                <ArrowUpRightAndArrowDownLeftFromCenterFarFAIcon size={12} />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip label="Close" position="bottom">
                                            <Button
                                                variant="tertiary"
                                                onClick={() => console.log("Copilot drawer close clicked")}
                                                aria-label="Close Copilot"
                                            >
                                                <XMarkFarFAIcon />
                                            </Button>
                                        </Tooltip>
                                    </Group>
                                </Flex>
                                <Flex className={classes.copilotActions}>
                                    <Button
                                        variant="secondary"
                                        onClick={() => console.log("Copilot chats clicked")}
                                        leftSection={<ListFarFAIcon />}
                                        aria-label="Chats list"
                                    >
                                        Chats
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => console.log("Copilot new chat clicked")}
                                        leftSection={<PlusFarFAIcon />}
                                        aria-label="New chat"
                                    >
                                        New
                                    </Button>
                                </Flex>
                            </Stack>
                            <Stack className={classes.copilotContent}>
                                <Stack gap={"sm"} align="center">
                                    <Flex>
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.4453 0.359375C25.2818 0.359474 32.4453 7.52288 32.4453 16.3594C32.4453 18.0869 32.1696 19.75 31.6631 21.3086C31.1219 20.9568 30.6647 20.4908 30.3271 19.9395C30.6214 18.7951 30.7783 17.5956 30.7783 16.3594C30.7783 8.44336 24.3613 2.02647 16.4453 2.02637C8.52923 2.02637 2.11133 8.4433 2.11133 16.3594C2.11133 24.2755 8.52923 30.6924 16.4453 30.6924C18.094 30.6924 19.6771 30.4127 21.1514 29.9004C21.6117 30.2722 21.9918 30.7359 22.2686 31.2656C20.4638 31.9712 18.5 32.3594 16.4453 32.3594C7.60876 32.3594 0.445312 25.1959 0.445312 16.3594C0.445318 7.52282 7.60876 0.359375 16.4453 0.359375ZM16.4453 4.47754C23.0071 4.4777 28.3262 9.79751 28.3262 16.3594C28.3262 16.3747 28.3253 16.39 28.3252 16.4053C27.8433 15.9635 27.2477 15.7027 26.6299 15.624C26.2529 10.326 21.8393 6.14469 16.4453 6.14453C10.8038 6.14453 6.23048 10.7179 6.23047 16.3594C6.23047 22.0009 10.8038 26.5742 16.4453 26.5742C16.4792 26.5742 16.5131 26.5716 16.5469 26.5713C16.7809 27.2042 17.2236 27.771 17.8779 28.1543C17.4082 28.2108 16.9302 28.2412 16.4453 28.2412C9.88334 28.2412 4.56348 22.9214 4.56348 16.3594C4.56349 9.79741 9.88334 4.47754 16.4453 4.47754ZM16.4453 8.90625C20.5616 8.90641 23.8984 12.2431 23.8984 16.3594C23.8984 20.4757 20.5616 23.8123 16.4453 23.8125C12.3289 23.8125 8.99121 20.4758 8.99121 16.3594C8.99122 12.243 12.3289 8.90625 16.4453 8.90625ZM16.4453 10.5723C13.2494 10.5723 10.6582 13.1634 10.6582 16.3594C10.6582 19.5553 13.2494 22.1465 16.4453 22.1465C19.6411 22.1463 22.2314 19.5552 22.2314 16.3594C22.2314 13.1635 19.6411 10.5724 16.4453 10.5723Z" fill="#7259EF"/>
                                            <path d="M20.4655 26.2096C19.8553 25.9086 19.8553 25.0386 20.4655 24.7376L22.2695 23.8479C23.282 23.3485 24.1014 22.5291 24.6008 21.5166L25.4906 19.7125C25.7915 19.1023 26.6616 19.1023 26.9625 19.7125L27.8523 21.5166C28.3516 22.5291 29.1711 23.3485 30.1835 23.8479L31.9876 24.7376C32.5978 25.0386 32.5978 25.9086 31.9876 26.2096L30.1835 27.0993C29.1711 27.5987 28.3516 28.4181 27.8523 29.4306L26.9625 31.2347C26.6616 31.8449 25.7915 31.8449 25.4906 31.2347L24.6008 29.4306C24.1014 28.4181 23.282 27.5987 22.2695 27.0993L20.4655 26.2096Z" fill="#7259EF"/>
                                        </svg>
                                    </Flex>
                                    <Text size="lg" fw={500} c={"gray.9"}>
                                        Get started
                                    </Text>
                                    <Text size="sm" c={"gray.7"} lh={"1.3125rem"} ta={"center"}>
                                        Type a prompt or select an available actions below about this bill
                                    </Text>
                                </Stack>
                                <Flex className={classes.copilotSendMessage} gap={0}>
                                    <TextField
                                        label={textValue ? "" : "Ask Copilot"}
                                        value={textValue}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTextValue(event.target.value)}
                                        ref={textFieldRef}
                                        autoFocus
                                        multiline
                                        minRows={1}
                                        maxRows={6}
                                    />
                                    <Button
                                        variant="primary"
                                        size="md"
                                        className={classes.sendButton}
                                        aria-label="Send"
                                        disabled={!textValue.trim()}
                                    >
                                        <PaperPlaneTopFarFAIcon filled />
                                    </Button>
                                    <div className={classes.glowEffect}></div>
                                </Flex>
                                <Stack className={classes.copilotBillsActions}>
                                    <Flex gap={"sm"} align={"center"} h={"1.9375rem"}>
                                        <Divider w={"2.375rem"} />
                                        <Text size="sm" c={"gray.9"} fw={500} lh={"1.25rem"} lts={"0.01563rem"}>OH H.B.7</Text>
                                        <Divider w={"2.375rem"} />
                                    </Flex>
                                    <Flex gap={"sm"} align={"center"}>
                                        <Text size="xs" c={"gray.7"} fw={500} lh={"1rem"} lts={"0.075rem"} tt={"uppercase"}>Bill actions</Text>
                                    </Flex>
                                    <Stack className={classes.copilotChatInlineActions} p={0}>
                                        <div className={classes.billActionsCollapseWrapper}>
                                            <Collapse
                                                className={classes.billActionsCollapse}
                                                in={compareActionsOpen}
                                                label={
                                                    <Flex align={"center"} gap={"md"}>
                                                        <Text c={"violet.4"}>
                                                            <CodeCompareFarFAIcon />
                                                        </Text>
                                                        <Text size="xs" fw={500} tt={"uppercase"} c={"gray.7"}>
                                                            Compare
                                                        </Text>
                                                    </Flex>
                                                }
                                                onToggle={() => setCompareActionsOpen(prev => !prev)}
                                                variant="default"
                                            >
                                                <Stack gap={4}>
                                                    <Button
                                                        variant="tertiary"
                                                        size="md"
                                                    >
                                                        With previous bill text
                                                    </Button>
                                                    <Button
                                                        variant="tertiary"
                                                        size="md"
                                                    >
                                                        With another bill
                                                    </Button>
                                                </Stack>
                                            </Collapse>
                                        </div>
                                        <div className={classes.billActionsCollapseWrapper}>
                                            <Collapse
                                                className={classes.billActionsCollapse}
                                                in={generateActionsOpen}
                                                label={
                                                    <Flex align={"center"} gap={"md"}>
                                                        <Text c={"violet.4"}>
                                                            <PenNibFarFAIcon />
                                                        </Text>
                                                        <Text size="xs" fw={500} tt={"uppercase"} c={"gray.7"}>
                                                            Generate
                                                        </Text>
                                                    </Flex>
                                                }
                                                onToggle={() => setGenerateActionsOpen(prev => !prev)}
                                                variant="default"
                                            >
                                                <Stack gap={4}>
                                                    <Button
                                                        variant="tertiary"
                                                        size="md"
                                                    >
                                                        Talking points against
                                                    </Button>
                                                    <Button
                                                        variant="tertiary"
                                                        size="md"
                                                    >
                                                        Talking points in favor
                                                    </Button>
                                                </Stack>
                                            </Collapse>
                                        </div>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Flex align={"center"} justify={"center"} gap={"xxs"} w={"100%"} mt={"auto"} p={"md"}>
                                <Text size="xs" c={"gray.7"} lh={1}>
                                    Copilot can make mistakes. Check important info.
                                </Text>
                                <Menu>
                                    <Menu.Target>
                                        <Button
                                            variant="tertiary"
                                            size="sm"
                                            aria-label="Learn more"
                                            >
                                            <CircleInfoFarFAIcon size={12} />
                                        </Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>AI Privacy</Menu.Item>
                                        <Menu.Item>FAQs</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>
                        </Stack>
                    </Flex>
                </Flex>
            </Stack>
            <Notification
                message="OH H.B. 7 has been moved to the Reviewed tab."
                variant="success"
                visible={showNotification}
                onClose={() => setShowNotification(false)}
                position="bottom-right"
            />
        </Stack>
    )
}
