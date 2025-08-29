import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Award, Lightbulb, Phone, MapPin, MessageCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">白名单机构 · 专业保障</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            卓跃宝贝 <span className="text-primary">计算思维启蒙营</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
            这不是简单的课程转换，而是一次面向未来核心能力的全面升级！ 从体能训练到思维赛场，激发孩子无限潜能。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              立即报名
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              了解详情
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">625元</div>
              <div className="text-sm text-muted-foreground">专属优惠价</div>
              <div className="text-xs text-muted-foreground line-through">原价3000元</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30节</div>
              <div className="text-sm text-muted-foreground">精品课程</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">79%</div>
              <div className="text-sm text-muted-foreground">专属优惠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">三合一融合课程体系</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              一份投入，三重收获的课程结构，理论与实践完美结合
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Bebras国际计算思维挑战</CardTitle>
                <CardDescription>拓展思维，与世界同龄人并肩前行</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  通过国际标准的趣味谜题，培养逻辑推理、识别规律、算法思维等核心能力， 为未来编程学习打下坚实基础。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    逻辑推理能力培养
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    算法思维训练
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    国际视野拓展
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">乐高创意搭建</CardTitle>
                <CardDescription>动手学习工程，培养创造力</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  通过动手搭建，体验结构稳定、机械传动的奥秘， 培养空间想象力和团队合作能力。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    工程思维培养
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    动手实践能力
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    团队协作精神
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">CSTA图形化编程</CardTitle>
                <CardDescription>创意与逻辑完美结合</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  采用国际CSTA标准，使用MIT开发的Scratch工具， 让孩子轻松掌握编程逻辑，实现创意作品。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    编程逻辑掌握
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    创意作品制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    从使用者到创造者
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">为什么选择我们？</h2>
            <p className="text-lg text-muted-foreground">一个安全、可靠、专业且极具长远价值的教育方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">绝不会"跑路"的学习环境</h3>
              <p className="text-muted-foreground">
                白名单机构，自有教学场地，无租金压力，为洛阳本地家庭提供最稳定的科技教育服务。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">国际标准的系统课程</h3>
              <p className="text-muted-foreground">
                严格遵循美国CSTA K-12计算机科学标准，融入国际Bebras计算思维挑战精华。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">进入数字时代的机会</h3>
              <p className="text-muted-foreground">
                30节精品课程，系统培养逻辑思维、创新实践与问题解决能力，为AI时代奠定基础。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">双轨制方案</h2>
            <p className="text-lg text-muted-foreground">
              两份心意，一个未来！无论课时剩余多少，都能找到最适合的计算思维启蒙路径
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent/50">
              <CardHeader>
                <Badge className="w-fit bg-accent/10 text-accent border-accent/20">方案A</Badge>
                <CardTitle className="text-2xl">爱心体验计划</CardTitle>
                <CardDescription>适合剩余课时10节及以下的学员</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-4">免费</div>
                <p className="text-muted-foreground mb-6">免费赠送4节计算思维体验课，让孩子零成本探索编程兴趣。</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    4节体验课程
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    零成本探索
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    专业指导
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  了解详情
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">推荐方案</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary border-primary/20">专属计划</Badge>
                <CardTitle className="text-2xl">三合一融合课程</CardTitle>
                <CardDescription>完整的计算思维启蒙体验</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">625元</span>
                  <span className="text-lg text-muted-foreground line-through">3000元</span>
                  <Badge variant="secondary">省2375元</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  30节精品课程，涵盖Bebras挑战、乐高搭建、Scratch编程三大核心模块。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    30节完整课程
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    三大核心模块
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    5节课时减免
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    国际标准认证
                  </li>
                </ul>
                <Button className="w-full">立即报名</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">常见问题</h2>
            <p className="text-lg text-muted-foreground">解答您关心的问题</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">孩子没有编程基础，能跟上课程吗？</AccordionTrigger>
              <AccordionContent>
                完全可以！我们的课程专为零基础孩子设计，采用图形化编程工具Scratch，
                通过拖拽积木的方式学习编程逻辑，让孩子轻松入门。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">课程时间如何安排？</AccordionTrigger>
              <AccordionContent>
                我们提供灵活的上课时间安排，包括周末班和平日班， 课程顾问会根据您的时间需求安排最合适的上课时间。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">如何保证教学质量？</AccordionTrigger>
              <AccordionContent>
                我们严格遵循美国CSTA K-12计算机科学标准，所有教师均经过专业培训认证，
                采用小班制教学，确保每个孩子都能得到充分关注。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">课程结束后孩子能达到什么水平？</AccordionTrigger>
              <AccordionContent>
                完成课程后，孩子将具备基础的计算思维能力，能够独立创作简单的动画和游戏，
                为后续深入学习编程和参加相关竞赛打下坚实基础。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">一场意外的结束，一个更好的开始！</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            每一次转变，都蕴含着成长的无限可能。我们理解这种过渡可能带来的不确定，
            但更相信，这正是为孩子开启一个更广阔未来的契机。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">详细地址</h3>
              <p className="text-sm text-muted-foreground text-center">
                涧西区武汉路中弘范特区
                <br />
                D区-2-113号
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">咨询热线</h3>
              <p className="text-sm text-muted-foreground">187-3630-8177</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">微信咨询</h3>
              <p className="text-sm text-muted-foreground">添加微信了解详情</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              立即咨询
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              预约试听
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">趣放学科技培训工作室</h3>
            <p className="text-muted-foreground">白名单机构 · 专业保障 · 洛阳市涧西区体育局指导</p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">© 2024 趣放学科技培训工作室. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
