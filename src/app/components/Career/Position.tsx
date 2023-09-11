import React from 'react';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon } from '@mui/material'; 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'; 
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckeIcon from '@mui/icons-material/Check';

import {
    DeveloperBoard as DeveloperIcon,
    Code as FrontEndIcon,
    Settings as BackEndIcon,
    Build as TestingIcon,
    SupervisorAccount as AdminIcon,
    LocalAtm as MarketerIcon,
    Dns as BigDataIcon,
    Palette as DesignerIcon,
    Games as GameIcon,
  } from '@mui/icons-material';

interface PositionProps {
    title:{
      en: string;
      cn: string;
    };
    description: {
      en: string;
      cn: string;
    };
    icon: React.ReactNode;
    image: string;
    required: {
      en:string[];
      cn:string[];
    }
    responsibility:{
      en:string[];
      cn:string[];
    }
}

const tabStyles = {
  minWidth: '150px', // Adjust tab width
};

const PositionSection: React.FC = () => {

    const { t,i18n } = useTranslation('common'); 
    const currentLocale = i18n.language;

    const positions: PositionProps[] = [
      {
        title: {
          en: "Game SEM ",
          cn: "游戏SEM",
        },
        description: {
          en:
            "Game SEM (Search Engine Marketing) is a specialized marketing approach used in the gaming industry. It involves paid advertising on search engines to promote video games, gaming platforms, and related products. Game SEM focuses on optimizing keywords, creating attractive ads, and analyzing campaign performance to reach gamers effectively and maximize marketing impact in the digital gaming landscape.",
          cn:
            "游戏SEM（搜索引擎营销）是游戏行业使用的一种专门营销方法。 它涉及在搜索引擎上推广视频游戏、游戏平台和相关产品的付费广告。 游戏 SEM 专注于优化关键字、制作有吸引力的广告并分析营销活动效果，以有效地吸引游戏玩家并最大限度地提高数字游戏领域的营销影响力。",
        },
        icon: <GameIcon fontSize="large" color="primary" />,
        image: '/assets/images/career/position_developer.png',
        responsibility: {
          en: [
            "Customize advertising strategies for mobile games on the WAP platform, including planning and executing paid ad campaigns on search engines like Google, Baidu, Toutiao, 360, Sogou, as well as information flow marketing platforms such as Tencent, Toutiao, Baidu, Facebook, and Twitter. Continuously monitor and optimize SEM promotion plans to improve advertising performance.",
            "Manage and maintain bidding ranking accounts. Regularly adjust account settings based on industry trends and dynamics. Optimize various keyword qualities, closely track daily consumption traffic, and ensure keyword relevance to the gaming industry, customer interests, and presentation formats.",
            "Conduct real-time monitoring of advertising performance and make timely adjustments to campaigns based on competitive insights from various search engines.",
            "Track and analyze the relevance and quality of incoming traffic. Generate detailed data reports at different project stages and propose comprehensive optimization strategies for ongoing campaigns.",
            "Analyze market trends and competitors' advertising strategies, especially in the context of information flow advertising. Implement effective optimizations based on the findings to enhance campaign performance.",
            "Assume responsibility for the day-to-day management of SEM accounts on various official websites and platforms. Continuously seek opportunities to expand and enhance SEM traffic and overall campaign performance.",
            "Perform in-depth data analysis for SEM projects, proactively identifying and addressing any issues or challenges within the campaigns.",
          ],
          cn: [
            "为WAP平台上的手机游戏定制广告策略，包括计划并执行Google、百度、头条、360、搜狗等搜索引擎以及腾讯、头条、百度、Facebook、Twitter等信息流营销平台上的付费广告活动。持续监控和优化SEM推广计划，以提高广告性能。",
            "管理和维护竞价排名账户。根据行业趋势和动态定期调整账户设置。优化各种关键词的质量，密切跟踪每日消费流量，并确保关键词与游戏行业、客户兴趣和展示格式的相关性。",
            "实时监控广告性能，并根据不同搜索引擎的竞争情况及时调整广告活动。",
            "跟踪和分析流入流量的相关性和质量。在不同项目阶段生成详细的数据报告，并提出全面的优化策略，以改进持续进行中的广告活动。",
            "分析市场趋势和竞争对手的广告策略，特别是在信息流广告领域。根据调查结果实施有效的优化，以增强广告活动性能。",
            "负责日常管理各种官方网站和平台上的SEM账户。不断寻找扩展和提升SEM流量和整体广告活动性能的机会。",
            "为SEM项目进行深入的数据分析，积极识别并解决项目内的任何问题或挑战。",
          ],
        },
        required: {
          en: [
            "Possess approximately 2 years of relevant industry experience, demonstrating proficiency in search engine and information flow advertising business operations and backend management. Familiarity with relevant supporting software is essential.",
            "Exhibit comprehensive knowledge of SEM theory and practical expertise. This includes skills in account setup, structural optimization, promotion cost control, and techniques for improving keyword quality.",
            "Show proficiency in managing keyword advertising models across various search engines, particularly Chinese search engines, with practical experience in campaign execution.",
            "Be familiar with advertising placements on platforms like Baidu Information Flow, Toutiao Information Flow, and Tencent Information Flow. Demonstrate expertise in managing information flow advertising platforms.",
            "Possess a high degree of sensitivity to changes in data and exhibit an active, analytical mindset. Strong teamwork, communication, and problem-solving skills are essential attributes for this role.",
          ],
          cn: [
            "具有大约2年的相关行业经验，熟练掌握搜索引擎和信息流广告业务操作和后端管理，熟悉相关的辅助软件操作至关重要。",
            "展示SEM理论知识和实际经验的全面知识。这包括帐户设置、结构优化、推广成本控制以及提高关键词质量的技巧。",
            "展示在各种搜索引擎，特别是中国搜索引擎，管理关键词广告模式的熟练技能，并具有在广告活动执行方面的实际经验。",
            "熟悉百度信息流、头条信息流和腾讯信息流等平台的广告投放，具备管理信息流广告平台的专业知识。",
            "对数据变化具有高度敏感性，并展现积极、分析性思维。强大的团队合作、沟通和问题解决能力是此职位的重要特质。",
          ],
        },
      },
      {
        title: {
          en: "Front-End Developer",
          cn: "前端开发工程师",
        },
        description: {
          en:
            "Front-End Developers are responsible for creating the user interfaces of websites and applications. They use front-end technologies like HTML, CSS, and JavaScript to ensure responsive and efficient designs. Collaboration with back-end developers and adherence to best practices are key in this role.",
          cn:
            "前端开发工程师负责创建网站和应用程序的用户界面。他们使用HTML、CSS和JavaScript等前端技术，以确保响应式和高效的设计。与后端开发人员的紧密合作和遵循最佳实践是这一角色的关键。",
        },
        icon: <FrontEndIcon fontSize="large" color="primary" />,
        image: '/assets/images/career/position_developer.png',
        responsibility: {
          en: [
            "Develop and implement the user interface of websites or applications based on the design provided by the designer.",
            "Use front-end technologies such as HTML, CSS, and JavaScript to create responsive and efficient user interfaces.",
            "Ensure consistent appearance and performance of the website or application across different browsers and devices.",
            "Optimize front-end code to improve the loading speed and performance of the website or application.",
            "Collaborate closely with back-end developers to ensure seamless integration between the front-end and back-end.",
            "Troubleshoot and fix front-end-related issues and errors.",
            "Work with the design team to ensure consistency between design and front-end implementation.",
            "Continuously learn and master new front-end technologies and best practices and apply them to projects.",
            "Ensure the security and data protection of the website or application.",
            "Provide technical advice and guidance on front-end development.",
          ],
          cn: [
            "根据设计师提供的设计稿，将网站或应用程序的用户界面进行开发和实现。",
            "使用HTML、CSS和JavaScript等前端技术来创建响应式、高效的用户界面。",
            "确保网站或应用程序在不同浏览器和设备上都具有一致的外观和性能。",
            "优化前端代码，以提高网站或应用程序的加载速度和性能。",
            "与后端开发人员密切合作，确保前端和后端的无缝集成。",
            "解决和修复前端相关的问题和错误。",
            "与设计团队合作，确保设计和前端实现的一致性。",
            "不断学习和掌握新的前端技术和最佳实践，并将其应用到项目中。",
            "确保网站或应用程序的安全性和数据保护。",
            "提供有关前端开发方面的技术建议和指导。",
          ],
        },
        required: {
          en: [
            "Proficiency in front-end technologies such as HTML, CSS, JavaScript, Ajax, WordPress, jQuery, MySQL, etc.",
            "Experience with responsive design and mobile-first development.",
            "Familiarity with at least one front-end framework (such as React, Angular, Vue, etc.).",
            "Strong cross-browser and cross-device compatibility experience.",
            "Familiarity with front-end build tools and task automation (such as Webpack, Gulp, etc.).",
            "Some knowledge of web performance optimization.",
            "Ability to collaborate closely with designers and back-end developers.",
            "Excellent problem-solving and analytical skills.",
            "Sensitivity to front-end development trends and best practices and the ability to apply them to work.",
            "Prioritization given to candidates with relevant project experience (2 years or more) or certifications in front-end development.",
            "Salary will be commensurate with experience and qualification.",
            "Strong communication and writing skills in both Mandarin and English are a must.",
            "A portfolio demonstrating relevant design experience is required.",
          ],
          cn: [
            "熟练掌握HTML、CSS和JavaScript、Ajax、WordPress、jQuery、MySQL等前端技术。",
            "具备响应式设计和移动优先开发经验。",
            "熟悉至少一种前端框架（如React、Angular、Vue等）。",
            "良好的跨浏览器和跨设备兼容性经验。",
            "熟悉前端构建工具和任务自动化（如Webpack、Gulp等）。",
            "对Web性能优化有一定了解。",
            "能够与设计师和后端开发人员紧密合作。",
            "出色的解决问题和分析能力。",
            "对前端开发趋势和最佳实践保持敏感，并能将其应用到工作中。",
            "在前端开发领域有相关项目经验（2年以上）或持有前端开发证书者优先。",
            "薪资将根据经验和资质而定。",
            "必须具备良好的普通话和英语沟通和写作能力。",
            "需要展示相关设计经验的作品集。",
          ],
        },
      },
      {
        title: {
          "en": "UI Designer",
          "cn": "UI设计师"
        },
        description: {
          "en": "UI Designers are responsible for creating visually appealing and user-friendly interfaces for websites and applications.",
          "cn": "UI设计师负责为网站和应用程序创建具有视觉吸引力和用户友好性的界面。"
        },
        icon: <DesignerIcon fontSize="large" color="primary" />,
        "image": "/assets/images/career/position_designer.png",
        responsibility: {
          en: [
            "Responsible for designing creative concepts, UI interfaces, slicing, and visual effects for the company's web and app software. Design and produce various interactive pages, icons, logos, buttons, and other related elements.",
            "Participate in the entire requirement formulation process, accurately understand the product, business, and data, provide excellent and reasonable design solutions, and design the overall artistic style, interaction design, page structure, and workflow according to the product requirements.",
            "Update and modify the design of various parts of the product or page interface based on the development requirements and changes.",
            "Focus on the usability, operability, and aesthetics of the pages and products from a UI design perspective and provide professional opinions on the usability, operability, and aesthetics of the pages."
          ],
          cn: [
            "负责为公司的web和app软件创建具有创意概念、UI界面、切图和视觉效果的设计。设计和制作各种交互页面、图标、标志、按钮等相关元素。",
            "参与整个需求制定过程，准确理解产品、业务和数据，提供优秀和合理的设计方案，并根据产品需求设计整体艺术风格、交互设计、页面结构和工作流程。",
            "根据开发要求和变更更新和修改产品或页面界面的各个部分的设计。",
            "从UI设计的角度关注页面和产品的可用性、操作性和美观性，并提供专业意见。"
          ],
        },
        required: {
          en: [
            "Minimum of 2 years of experience in the UI design industry, with experience in interface style setting and UI specifications, and extensive experience in web UI design.",
            "Solid artistic foundation and creative design abilities, a good sense of aesthetics and color matching, familiarity with interface interaction or user experience.",
            "Experience in web product interaction and visual design, with at least one independent experience in designing user experience for data/backend/application-type products.",
            "Proficiency in design tools such as Photoshop, Illustrator, Axure, Sketch, and understanding of component libraries and business data visualization.",
            "Ability to create simple icon graphics.",
            "Familiarity with Japanese ACG anime.",
            "Independent thinker with an open-minded personality, able to accept different opinions.",
            "Ability to communicate and discuss across departments.",
            "Understanding of dynamic spine animation.",
            "Foundation in drawing scenes.",
            "Strong sense of aesthetics and an eye for visual composition.",
            "Proficient in drawing in Japanese style, with additional points for expertise in other styles such as Chinese, Korean, or Western.",
            "Skilled in creating various perspectives and different angles of multi-character CG illustrations, with precise skeletal structure and the ability to set the scene.",
            "Proficient in drawing captivating characters with attractive facial features and body language, with a preference for mature and alluring qualities."
          ],
          cn: [
            "至少2年以上的UI设计行业经验，有界面风格设定和UI规范的经验，以及丰富的web UI设计经验。",
            "坚实的艺术基础和创意设计能力，良好的美学感觉和色彩搭配，熟悉界面交互或用户体验。",
            "在web产品交互和视觉设计方面有经验，至少有一次独立设计数据/后台/应用程序类型产品的用户体验的经历。",
            "精通设计工具，如Photoshop、Illustrator、Axure、Sketch等，并了解组件库和业务数据可视化。",
            "能够创建简单的图标图形。",
            "具有对日本ACG动漫一定的认知。",
            "具有独立思考且开放的性格，能接受不同意见。",
            "具有跨部门沟通与讨论的能力。",
            "对于spine动态制作有一定认知。",
            "具有一定的绘制场景基础。",
            "拥有良好的审美并对画面构成有一定的美感。",
            "擅长绘制日系风格，若有中国.韩国.欧美等其他风格加分。",
            "擅长绘制各种透视及不同视角的多人CG图，且骨架精准并能营造情境。",
            "擅长绘制人物角色并具吸引人的五官与体态，成熟性感向尤佳。",
          ],
        },
      },
      {
        title: {
          en: "Big Data Ops & Maint",
          cn: "大数据运维"
        },
        description: {
          en: "Big Data Operations and Maintenance professionals manage and maintain the company's big data cluster, ensuring high availability, performance, and system stability.",
          cn: "大数据运维专业人员负责管理和维护公司的大数据集群，确保高可用性、高性能和系统稳定性。"
        },
        icon: <BigDataIcon fontSize="large" color="primary" />,
        image: '/assets/images/career/position_big_data.png',
        responsibility: {
          en: [
            "Manage the company's big data cluster, providing a highly available and high-performance big data cluster system, and ensuring the stable operation of the system.",
            "Responsible for the automated operation and maintenance, as well as monitoring tools, of various services in the big data cluster, including daily monitoring, data backup, data monitoring, data alerts, and fault handling.",
            "Handle permission management, fault handling, and daily error handling in the big data platform cluster.",
            "Optimize the Hadoop environment according to business needs, including MR jobs, computing frameworks, improving cluster throughput, and reducing costs."
          ],
          cn: [
            "管理公司的大数据集群，提供高可用性和高性能的大数据集群系统，并确保系统的稳定运行。",
            "负责大数据集群各服务的自动化运维和监控工具，包括日常监控、数据备份、数据监控、数据报警以及故障处理。",
            "处理大数据平台集群中的权限管理、故障处理和日常错误处理。",
            "根据业务需要优化Hadoop环境，包括MR作业、计算框架、提高集群吞吐量以及降低成本。"
          ]
        },
        required: {
          en: [
            "Bachelor's degree or above in a full-time program, in computer science or a related field, with at least 3 years of relevant work experience, understanding and implementation of deployment scenarios for big data products.",
            "Familiarity with the Hadoop ecosystem. Prior experience in installing, deploying, and optimizing mainstream distributed development suites such as HBase, Hive, Spark, Impala, Kafka, Redis, Azkaban, ZooKeeper, and YARN is preferred.",
            "Experience using and maintaining Cloudera, familiarity with log collection tools such as Filebeat, Logstash, Flume.",
            "Proficient in basic command operations of Linux-like operating systems, able to write scripts for daily operation and maintenance work.",
            "Familiarity with Linux development environments and proficiency in one scripting language among Shell, Java, or Python.",
            "Familiarity with common open-source tools such as Nginx, Zabbix, Grafana, including installation, configuration, and usage."
          ],
          cn: [
            "全日制本科及以上学历，计算机或相关专业，3年及以上相关工作经验，理解并实施大数据产品的部署场景。",
            "熟悉Hadoop生态圈。对HBase、Hive、Spark、Impala、Kafka、Redis、azakaban、zookeeper、yarn等主流分布式开发套件有一定认识，有相关安装部署及调优经验者优先。",
            "对Cloudera有使用及运维经验，熟悉日志采集工具，如Filebeat、Logstash、Flume等。",
            "熟悉Linux类操作系统的基础命令操作，能够编写脚本开展日常运维工作。",
            "熟悉Linux开发环境，会使用Shell/Java/Python中的一门脚本语言。",
            "熟悉常见开源工具如Nginx、Zabbix、Grafana等的安装配置和使用。"
          ]
        }
      }
    ];
    
      

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    
  
    return (
        <section id="positions">
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TabContext value={value.toString()}>
                <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    overflowX: 'auto', // Enable horizontal scrolling
                    maxWidth: '100%',  // Ensure the tabs take up the full width
                }}
                >
                    {positions.map((position, index) => (
                        <Tab
                        key={index}
                        label={
                            <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            sx={tabStyles} // Apply tab styles
                            >
                            {position.icon}
                            <Typography variant={currentLocale === 'en' ? 'body1' : 'h6'}>{position.title[currentLocale as 'en']}</Typography>
                            </Box>
                        }
                        />
                    ))}
                </Tabs>
                <TabPanel value={value.toString()} sx={{ width: '100%' }}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                      <Grid container spacing={4}>
                          <Grid item xs={12} lg={12} order={{ xs: 2, lg: 1 }} textAlign="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Box>
                                  <Image
                                    src={positions[value].image}
                                    alt={positions[value].title[currentLocale as 'en'] ?? "null"}
                                    width={500} 
                                    height={400} 
                                  />
                              </Box>
                          </Grid>
                          <Grid item xs={12} lg={12} order={{ xs: 1, lg: 2 }}>
                            <Typography variant="h4" sx={{ 
                            fontWeight: 'bold',
                            color: '#333',      
                            marginBottom: '8px', 
                            textTransform: 'capitalize' 
                            }}>
                              {positions[value].title[currentLocale as 'en']}
                            </Typography>

                          <Typography variant="body1">
                            {positions[value].description[currentLocale as 'en']}
                          </Typography>
                          <List>
                              {positions[value].responsibility[currentLocale as 'en'].map((item: string, index:number) => (
                                  <ListItem key={index}>
                                  <ListItemIcon>
                                      <CheckCircleIcon sx={{ color: '#0ea2bd'}}/>
                                  </ListItemIcon>
                                  {item}
                                  </ListItem>
                              ))}
                          </List>

                          <Typography variant="body1" fontWeight={"bold"}>
                            {t('career.jobRequirements')} :
                          </Typography>
                          <List>
                            {positions[value].required[currentLocale as 'en'].map((item: string, index:number) => (
                                  <ListItem key={index}>
                                  <ListItemIcon>
                                   <CheckeIcon />
                                  </ListItemIcon>
                                  {item}
                                  </ListItem>
                              ))}
                          </List>

                          <Typography variant="body2" fontStyle="italic" sx={{ marginTop: '16px', color: 'grey', fontSize: 'small' }}>
                            {t('career.sendResumeText')}
                          </Typography>
                          </Grid>
                      </Grid>
                  </Paper>
                                
                </TabPanel>
            </TabContext>
          </Container>
          
        </section>
      );
    };
    
    export default PositionSection;
