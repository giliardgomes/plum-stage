import { Stack, Flex, Paper, Text, Group } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import classes from "../AIBillTracker.module.css"
import React, { useState } from "react"
import { TopNav } from "../../../lib/molecules/TopNav"
import { Sidebar } from "../../../lib/molecules/Sidebar"
import { Breadcrumbs } from "../../../lib/components/Breadcrumbs"
import { TextField } from "../../../lib/components/TextField"
import { MultiSelect } from "../../../lib/components/MultiSelect"
import { Switch } from "../../../lib/components/Switch"
import { Checkbox } from "../../../lib/components/Checkbox"
import { Radio } from "../../../lib/components/Radio"
import { SegmentedControl } from "../../../lib/components/SegmentedControl"
import { Select } from "../../../lib/components/Select"
import { Button } from "../../../lib/components/Button"
import { FileDropzone } from "../../../lib/components/FileDropzone"
import { Label } from "../../../lib/components/Label"
import { Tooltip } from "../../../lib/components/Tooltip"
import { Avatar } from "../../../lib/components/Avatar"
import { PlusFarFAIcon, FilePdfFarFAIcon, XMarkFarFAIcon, MagnifyingGlassFarFAIcon } from "../../../lib/components/Icons"

export function NewSearch() {
    const navigate = useNavigate();
    const [clearOptions, setClearOptions] = useState<string[]>(["1"]);
    const [activeTab, setActiveTab] = useState("1");
    const [showPolicyTopicTab1, setShowPolicyTopicTab1] = useState(false);
    const [showPolicyTopicTab2, setShowPolicyTopicTab2] = useState(false);
    const [isGeneratingTopics, setIsGeneratingTopics] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [selectedTrackingBoard, setSelectedTrackingBoard] = useState<string | null>(null);
    const [phrasesValueTab1, setPhrasesValueTab1] = useState("");
    const [phrasesValueTab2, setPhrasesValueTab2] = useState("");
    const [excludeWordsTab1, setExcludeWordsTab1] = useState<string[]>([]);
    const [excludeWordsTab2, setExcludeWordsTab2] = useState<string[]>([]);
    const [policyTopics, setPolicyTopics] = useState<Array<{
        name: string;
        phrases: string;
        excludeWords: string[];
    }>>([{ name: "", phrases: "", excludeWords: [] }]);
    const [isNavigatingToPreview, setIsNavigatingToPreview] = useState(false);

    const handleGenerateTopicsTab1 = () => {
        setIsGeneratingTopics(true);

        // Simulate loading for 1 second
        setTimeout(() => {
            setIsGeneratingTopics(false);
            setShowPolicyTopicTab1(true);
        }, 1000);
    };

    const handleGenerateTopicsTab2 = () => {
        setIsGeneratingTopics(true);

        // Simulate loading for 1 second
        setTimeout(() => {
            setIsGeneratingTopics(false);
            setShowPolicyTopicTab2(true);
        }, 1000);
    };

    const handleAddExcludeWordTab1 = () => {
        setExcludeWordsTab1([...excludeWordsTab1, ""]);
    };

    const handleRemoveExcludeWordTab1 = (index: number) => {
        setExcludeWordsTab1(excludeWordsTab1.filter((_, i) => i !== index));
    };

    const handleExcludeWordChangeTab1 = (value: string, index: number) => {
        const newExcludeWords = [...excludeWordsTab1];
        newExcludeWords[index] = value;
        setExcludeWordsTab1(newExcludeWords);
    };

    const handleAddExcludeWordTab2 = () => {
        setExcludeWordsTab2([...excludeWordsTab2, ""]);
    };

    const handleRemoveExcludeWordTab2 = (index: number) => {
        setExcludeWordsTab2(excludeWordsTab2.filter((_, i) => i !== index));
    };

    const handleExcludeWordChangeTab2 = (value: string, index: number) => {
        const newExcludeWords = [...excludeWordsTab2];
        newExcludeWords[index] = value;
        setExcludeWordsTab2(newExcludeWords);
    };

    const handleAddPolicyTopic = () => {
        setPolicyTopics([...policyTopics, { name: "", phrases: "", excludeWords: [] }]);
    };

    const handleUpdatePolicyTopicName = (value: string, index: number) => {
        const newPolicyTopics = [...policyTopics];
        newPolicyTopics[index].name = value;
        setPolicyTopics(newPolicyTopics);
    };

    const handleUpdatePolicyTopicPhrases = (value: string, index: number) => {
        const newPolicyTopics = [...policyTopics];
        newPolicyTopics[index].phrases = value;
        setPolicyTopics(newPolicyTopics);
    };

    const handleAddExcludeWordToPolicyTopic = (topicIndex: number) => {
        const newPolicyTopics = [...policyTopics];
        newPolicyTopics[topicIndex].excludeWords = [...newPolicyTopics[topicIndex].excludeWords, ""];
        setPolicyTopics(newPolicyTopics);
    };

    const handleRemoveExcludeWordFromPolicyTopic = (topicIndex: number, wordIndex: number) => {
        const newPolicyTopics = [...policyTopics];
        newPolicyTopics[topicIndex].excludeWords = newPolicyTopics[topicIndex].excludeWords.filter((_, i) => i !== wordIndex);
        setPolicyTopics(newPolicyTopics);
    };

    const handleUpdateExcludeWordInPolicyTopic = (value: string, topicIndex: number, wordIndex: number) => {
        const newPolicyTopics = [...policyTopics];
        newPolicyTopics[topicIndex].excludeWords[wordIndex] = value;
        setPolicyTopics(newPolicyTopics);
    };

    const handleGoToPreview = () => {
        setIsNavigatingToPreview(true);

        // Simulate loading for 1 second
        setTimeout(() => {
            setIsNavigatingToPreview(false);
            navigate("/AIBillTracker/Preview");
        }, 1000);
    };
//
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
                    <Stack className={classes.main} h={"100%"} w={"100%"} gap={0}>
                        <Stack className={classes.pageContent}>
                            <Stack gap={0}>
                                <Breadcrumbs
                                    items={[
                                        { label: 'AI Bill Tracker', to: '/AIBillTracker' },
                                        { label: 'New Search' }
                                    ]}
                                    className={classes.stickyBreadcrumbs}
                                />
                                <Flex gap={"md"} w={"100%"} justify={"center"} className={classes.setupTracker}>
                                    <Paper bg={"white"} w={"100%"} maw={"24.875rem"} className={classes.paperBox}>
                                        <Stack gap={"2rem"}>
                                            <Text c="gray.9" fw={500} size="xl" lh={"2rem"}>
                                                Set up your Tracking Board
                                            </Text>
                                            <Stack gap={"xl"}>
                                                <TextField
                                                    label="Name"
                                                />
                                                <MultiSelect
                                                    label="Region"
                                                    data={[
                                                        { label: "Entire US", value: "entire-us" },
                                                        { label: "Region 1", value: "region-1" },
                                                        { label: "Region 2", value: "region-2" },
                                                    ]}
                                                    defaultValue={["entire-us"]}
                                                />
                                                <Stack gap={"0.75rem"}>
                                                    <TextField
                                                        label="Year"
                                                    />
                                                    <Switch
                                                        label="Include carryover legislation"
                                                        defaultChecked
                                                        onChange={(event) => console.log(event)}
                                                    />
                                                </Stack>
                                            </Stack>
                                            <Checkbox.Group
                                                label="Choose how to clear bills from unreviewed"
                                                orientation="vertical"
                                                value={clearOptions}
                                                onChange={setClearOptions}
                                            >
                                                <Checkbox value="1" label="When bills are given a stance" />
                                                <Checkbox value="2" label="When bills are given a priority" />
                                                <Checkbox value="3" label="When bills are given an issue" />
                                                <Checkbox value="4" label="When bills are given an assignment" />
                                                <Checkbox value="5" label="When bills are reviewed" />
                                            </Checkbox.Group>
                                            <Radio.Group
                                                label="Permissions"
                                                onChange={(value) => console.log("Selected priority:", value)}
                                                defaultValue="1"
                                            >
                                                <Radio value="1" label="Everyone at Organization" />
                                                <Radio value="2" label="Just me" />
                                            </Radio.Group>
                                        </Stack>
                                    </Paper>
                                    <Stack w={"100%"} maw={"50rem"} className={classes.paperBox}>
                                        <Stack gap={"2rem"} align="flex-start">
                                            <Text c="gray.9" fw={500} size="xl" lh={"2rem"}>
                                                Set up search areas
                                            </Text>
                                            <Stack gap={"xl"} w={"100%"} align="flex-start">
                                                <SegmentedControl
                                                    size="sm"
                                                    data={[
                                                        { label: "Convert from Tracking Board", value: "1" },
                                                        { label: "Upload URL/PDF", value: "2" },
                                                        { label: "From scratch", value: "3" },
                                                    ]}
                                                    defaultValue="1"
                                                    onChange={(value) => setActiveTab(value)}
                                                    fullWidth={false}
                                                />
                                                {activeTab === "1" && (
                                                    <>
                                                        {!showPolicyTopicTab1 && (
                                                            <Stack w={"100%"} gap={"xl"} className={classes.convertFromTrackingBoard}>
                                                                <Text c={"gray.9"} lts={"0.03125rem"} fw={400} size="xs">
                                                                    Select an existing Tracking Board and we'll convert the search terms into phrases optimized for the AI Feed.
                                                                </Text>
                                                                <Select
                                                                    label="Tracking Board"
                                                                    data={[
                                                                        { label: "2024 Tracking Board", value: "1" },
                                                                        { label: "Tracking Board 2", value: "2" },
                                                                        { label: "Tracking Board 3", value: "3" },
                                                                    ]}
                                                                    value={selectedTrackingBoard || undefined}
                                                                    onChange={setSelectedTrackingBoard}
                                                                    className={classes.fullWidth}
                                                                />
                                                                <Group gap={"xs"}>
                                                                    <Button
                                                                        variant="primary"
                                                                        aria-label="Generate topics"
                                                                        onClick={handleGenerateTopicsTab1}
                                                                        loading={isGeneratingTopics}
                                                                        disabled={!selectedTrackingBoard || isGeneratingTopics}
                                                                    >
                                                                        Generate topics
                                                                    </Button>
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                        {showPolicyTopicTab1 && (
                                                            <Stack gap={"2rem"} w={"100%"} className={classes.policyTopic}>
                                                                <Paper className={classes.innerPaper}>
                                                                    <TextField
                                                                        label="Naming of your policy topic"
                                                                    />
                                                                    <TextField
                                                                        label="Phrases that describe what you're looking for"
                                                                        multiline
                                                                        minRows={4}
                                                                        value={phrasesValueTab1}
                                                                        onChange={(e) => setPhrasesValueTab1((e.currentTarget as HTMLTextAreaElement).value)}
                                                                        description="To search for exact matches only, enclose your terms in quotation marks."
                                                                    />
                                                                    <Stack gap={"md"} w={"100%"}>
                                                                        <Button
                                                                            variant="tertiary"
                                                                            leftSection={<PlusFarFAIcon />}
                                                                            danger
                                                                            onClick={handleAddExcludeWordTab1}
                                                                        >
                                                                            Add words to exclude
                                                                        </Button>
                                                                        {excludeWordsTab1.map((word, index) => (
                                                                            <Flex key={index} gap={"xs"} w={"100%"} align={"flex-end"} className={classes.excludeWords}>
                                                                                <TextField
                                                                                    label="Exclude word"
                                                                                    w={320}
                                                                                    value={word}
                                                                                    onChange={(e) => handleExcludeWordChangeTab1((e.currentTarget as HTMLInputElement).value, index)}
                                                                                />
                                                                                <Tooltip label="Remove exclude word" position="top">
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        danger
                                                                                        size="md"
                                                                                        aria-label="Remove exclude word"
                                                                                        onClick={() => handleRemoveExcludeWordTab1(index)}
                                                                                    >
                                                                                        <XMarkFarFAIcon />
                                                                                    </Button>
                                                                                </Tooltip>
                                                                            </Flex>
                                                                        ))}
                                                                    </Stack>
                                                                </Paper>
                                                                <Group gap={"xs"}>
                                                                    <Button
                                                                        variant="primary"
                                                                        aria-label="Go to preview"
                                                                        disabled={!phrasesValueTab1}
                                                                        onClick={handleGoToPreview}
                                                                        loading={isNavigatingToPreview}
                                                                    >
                                                                        Go to preview
                                                                    </Button>
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                    </>
                                                )}
                                                {activeTab === "2" && (
                                                    <Stack className={classes.uploadURLPDF}>
                                                        {!showPolicyTopicTab2 && (
                                                            <>
                                                                <Text c={"gray.9"} lts={"0.03125rem"} fw={400} size="xs">
                                                                    Upload a PDF or provide a URL to your policy priorities or relevant documentation. We'll analyze the content and suggest search areas and terms.
                                                                </Text>
                                                                <TextField
                                                                    label="Website URL"
                                                                    description="Provide a URL to your organization's policy priorities or advocacy page"
                                                                    placeholder="https://www.example.com/policy-priorities"
                                                                />
                                                                <Stack gap={"xs"}>
                                                                    <Label label="Upload PDF"></Label>
                                                                    {uploadedFiles.length === 0 && (
                                                                        <FileDropzone
                                                                            title="Upload a file"
                                                                            description="or drag and drop your PDF (up to 10MB)"
                                                                            accept={{
                                                                                "application/pdf": [".pdf"],
                                                                            }}
                                                                            onDrop={(files) => {
                                                                                console.log("Files uploaded:", files);
                                                                                setUploadedFiles(prev => [...prev, ...files]);
                                                                            }}
                                                                        />
                                                                    )}
                                                                    {uploadedFiles.length > 0 && (
                                                                    <Stack gap="md">
                                                                        <Stack gap="xs">
                                                                            {uploadedFiles.map((file, index) => (
                                                                                <Flex key={index} className={classes.uploadedFile}>
                                                                                    <Stack align="flex-start" gap="md" w={"100%"}>
                                                                                        <FilePdfFarFAIcon color="var(--mantine-color-violet-5)" />
                                                                                        <Stack gap={0} w={"100%"}>
                                                                                            <Text size="sm" fw={500} c={"gray.9"} className={classes.uploadedFileName}>{file.name}</Text>
                                                                                            <Text size="xs" c="gray.7">{Math.round(file.size / 1024)} KB</Text>
                                                                                        </Stack>
                                                                                    </Stack>
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        size="sm"
                                                                                        onClick={() => {
                                                                                            setUploadedFiles(prev => prev.filter((_, i) => i !== index));
                                                                                        }}
                                                                                        aria-label="Remove file"
                                                                                    >
                                                                                        <XMarkFarFAIcon />
                                                                                    </Button>
                                                                                </Flex>
                                                                            ))}
                                                                        </Stack>
                                                                    </Stack>
                                                                    )}
                                                                </Stack>
                                                                <Group gap={"xs"}>
                                                                    <Button
                                                                        variant="primary"
                                                                        aria-label="Generate topics"
                                                                        onClick={handleGenerateTopicsTab2}
                                                                        loading={isGeneratingTopics}
                                                                    >
                                                                        Generate topics
                                                                    </Button>
                                                                </Group>
                                                            </>
                                                        )}
                                                        {showPolicyTopicTab2 && (
                                                            <Stack gap={"2rem"} w={"100%"} className={classes.policyTopic}>
                                                                <Paper className={classes.innerPaper}>
                                                                    <TextField
                                                                        label="Naming of your policy topic"
                                                                    />
                                                                    <TextField
                                                                        label="Phrases that describe what you're looking for"
                                                                        multiline
                                                                        minRows={4}
                                                                        value={phrasesValueTab2}
                                                                        onChange={(e) => setPhrasesValueTab2((e.currentTarget as HTMLTextAreaElement).value)}
                                                                        description="To search for exact matches only, enclose your terms in quotation marks."
                                                                    />
                                                                    <Stack gap={"md"} w={"100%"}>
                                                                        <Button
                                                                            variant="tertiary"
                                                                            leftSection={<PlusFarFAIcon />}
                                                                            danger
                                                                            onClick={handleAddExcludeWordTab2}
                                                                        >
                                                                            Add words to exclude
                                                                        </Button>
                                                                        {excludeWordsTab2.map((word, index) => (
                                                                            <Flex key={index} gap={"xs"} w={"100%"} align={"flex-end"} className={classes.excludeWords}>
                                                                                <TextField
                                                                                    label="Exclude word"
                                                                                    w={320}
                                                                                    value={word}
                                                                                    onChange={(e) => handleExcludeWordChangeTab2((e.currentTarget as HTMLInputElement).value, index)}
                                                                                />
                                                                                <Tooltip label="Remove exclude word" position="top">
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        danger
                                                                                        size="md"
                                                                                        aria-label="Remove exclude word"
                                                                                        onClick={() => handleRemoveExcludeWordTab2(index)}
                                                                                    >
                                                                                        <XMarkFarFAIcon />
                                                                                    </Button>
                                                                                </Tooltip>
                                                                            </Flex>
                                                                        ))}
                                                                    </Stack>
                                                                </Paper>
                                                                <Group gap={"xs"}>
                                                                    <Button
                                                                        variant="primary"
                                                                        aria-label="Go to preview"
                                                                        disabled={!phrasesValueTab2}
                                                                        onClick={handleGoToPreview}
                                                                        loading={isNavigatingToPreview}
                                                                    >
                                                                        Go to preview
                                                                    </Button>
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                    </Stack>
                                                )}
                                                {activeTab === "3" && (
                                                    <Stack className={classes.fromScratch}>
                                                        <Stack gap={"2rem"} w={"100%"} className={classes.policyTopic}>
                                                            {policyTopics.map((topic, topicIndex) => (
                                                                <Paper key={topicIndex} className={classes.innerPaper}>
                                                                    <TextField
                                                                        label="Naming of your policy topic"
                                                                        value={topic.name}
                                                                        onChange={(e) => handleUpdatePolicyTopicName((e.currentTarget as HTMLInputElement).value, topicIndex)}
                                                                    />
                                                                    <TextField
                                                                        label="Phrases that describe what you're looking for"
                                                                        multiline
                                                                        minRows={4}
                                                                        value={topic.phrases}
                                                                        onChange={(e) => handleUpdatePolicyTopicPhrases((e.currentTarget as HTMLTextAreaElement).value, topicIndex)}
                                                                        description="To search for exact matches only, enclose your terms in quotation marks."
                                                                    />
                                                                    <Stack gap={"md"} w={"100%"}>
                                                                        <Button
                                                                            variant="tertiary"
                                                                            leftSection={<PlusFarFAIcon />}
                                                                            danger
                                                                            onClick={() => handleAddExcludeWordToPolicyTopic(topicIndex)}
                                                                        >
                                                                            Add words to exclude
                                                                        </Button>
                                                                        {topic.excludeWords.map((word, wordIndex) => (
                                                                            <Flex key={wordIndex} gap={"xs"} w={"100%"} align={"flex-end"} className={classes.excludeWords}>
                                                                                <TextField
                                                                                    label="Exclude word"
                                                                                    w={320}
                                                                                    value={word}
                                                                                    onChange={(e) => handleUpdateExcludeWordInPolicyTopic((e.currentTarget as HTMLInputElement).value, topicIndex, wordIndex)}
                                                                                />
                                                                                <Tooltip label="Remove exclude word" position="top">
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        danger
                                                                                        size="md"
                                                                                        aria-label="Remove exclude word"
                                                                                        onClick={() => handleRemoveExcludeWordFromPolicyTopic(topicIndex, wordIndex)}
                                                                                    >
                                                                                        <XMarkFarFAIcon />
                                                                                    </Button>
                                                                                </Tooltip>
                                                                            </Flex>
                                                                        ))}
                                                                    </Stack>
                                                                    {policyTopics.length > 1 && (
                                                                        <Button
                                                                            variant="tertiary"
                                                                            aria-label="Remove policy topic"
                                                                            onClick={() => {
                                                                                const newPolicyTopics = [...policyTopics];
                                                                                newPolicyTopics.splice(topicIndex, 1);
                                                                                setPolicyTopics(newPolicyTopics);
                                                                            }}
                                                                        >
                                                                            <XMarkFarFAIcon />
                                                                        </Button>
                                                                    )}
                                                                </Paper>
                                                            ))}
                                                            <Group gap={"xs"}>
                                                                <Button
                                                                    variant="secondary"
                                                                    aria-label="Add another policy topic"
                                                                    leftSection={<PlusFarFAIcon />}
                                                                    onClick={handleAddPolicyTopic}
                                                                >
                                                                    Add another policy topic
                                                                </Button>
                                                                <Button
                                                                    variant="primary"
                                                                    aria-label="Go to preview"
                                                                    disabled={policyTopics.every(topic => !topic.phrases)}
                                                                    onClick={handleGoToPreview}
                                                                    loading={isNavigatingToPreview}
                                                                >
                                                                    Go to preview
                                                                </Button>
                                                            </Group>
                                                        </Stack>
                                                    </Stack>
                                                )}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
    )
}
