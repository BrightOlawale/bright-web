"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, BookOpen, Cross, Star, Sparkles, Eye, Lock, Unlock, Gift, Crown, Shield, Zap, Target, Flame, Rainbow, Moon, Sun, Key, MapPin, Compass, Sword, Anchor, Lightbulb, Mountain, TreePine, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ScriptureBanner = () => {
  const [currentVerse, setCurrentVerse] = useState(0)
  const [showFull, setShowFull] = useState(false)
  const [interactionLevel, setInteractionLevel] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [unlockedVerses, setUnlockedVerses] = useState<number[]>([])
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  const verses = [
    {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16",
      icon: Heart,
      color: "text-red-400",
      category: "love",
      unlockRequirement: 0
    },
    {
      text: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.",
      reference: "Romans 3:23-24",
      icon: Crown,
      color: "text-purple-400",
      category: "salvation",
      unlockRequirement: 1
    },
    {
      text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
      reference: "Romans 5:8",
      icon: Heart,
      color: "text-pink-400",
      category: "love",
      unlockRequirement: 2
    },
    {
      text: "The wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
      reference: "Romans 6:23",
      icon: Gift,
      color: "text-yellow-400",
      category: "salvation",
      unlockRequirement: 3
    },
    {
      text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
      reference: "Romans 10:9",
      icon: Shield,
      color: "text-green-400",
      category: "salvation",
      unlockRequirement: 4
    },
    {
      text: "For everyone who calls on the name of the Lord will be saved.",
      reference: "Romans 10:13",
      icon: Anchor,
      color: "text-blue-400",
      category: "salvation",
      unlockRequirement: 5
    },
    {
      text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
      reference: "Romans 8:1",
      icon: Unlock,
      color: "text-green-500",
      category: "freedom",
      unlockRequirement: 6
    },
    {
      text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      reference: "Romans 8:28",
      icon: Compass,
      color: "text-teal-400",
      category: "purpose",
      unlockRequirement: 7
    },
    {
      text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      reference: "Romans 8:38-39",
      icon: Flame,
      color: "text-red-500",
      category: "love",
      unlockRequirement: 8
    },
    {
      text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
      reference: "Ephesians 2:8-9",
      icon: Gift,
      color: "text-yellow-300",
      category: "grace",
      unlockRequirement: 9
    },
    {
      text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
      reference: "John 14:6",
      icon: Cross,
      color: "text-blue-400",
      category: "truth",
      unlockRequirement: 10
    },
    {
      text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      reference: "2 Corinthians 5:17",
      icon: Sparkles,
      color: "text-indigo-400",
      category: "transformation",
      unlockRequirement: 11
    },
    {
      text: "He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed.",
      reference: "1 Peter 2:24",
      icon: Cross,
      color: "text-red-600",
      category: "healing",
      unlockRequirement: 12
    },
    {
      text: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit.",
      reference: "1 Peter 3:18",
      icon: Mountain,
      color: "text-purple-500",
      category: "sacrifice",
      unlockRequirement: 13
    },
    {
      text: "But these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name.",
      reference: "John 20:31",
      icon: BookOpen,
      color: "text-orange-400",
      category: "faith",
      unlockRequirement: 14
    },
    {
      text: "Whoever believes in the Son has eternal life, but whoever rejects the Son will not see life, for God's wrath remains on them.",
      reference: "John 3:36",
      icon: Sun,
      color: "text-yellow-500",
      category: "eternal life",
      unlockRequirement: 15
    },
    {
      text: "Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.",
      reference: "John 5:24",
      icon: Key,
      color: "text-gold-400",
      category: "eternal life",
      unlockRequirement: 16
    },
    {
      text: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
      icon: Moon,
      color: "text-cyan-400",
      category: "rest",
      unlockRequirement: 17
    },
    {
      text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, 'Abba, Father.'",
      reference: "Romans 8:15",
      icon: Crown,
      color: "text-purple-300",
      category: "adoption",
      unlockRequirement: 18
    },
    {
      text: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
      reference: "Acts 4:12",
      icon: Gem,
      color: "text-emerald-400",
      category: "salvation",
      unlockRequirement: 19
    }
  ]

  useEffect(() => {
    if (interactionLevel > 1) { // Only start cycling after at least 2 verses are unlocked
      const interval = setInterval(() => {
        setCurrentVerse((prev) => {
          const maxVerses = Math.min(verses.length, interactionLevel)
          return (prev + 1) % maxVerses
        })
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [interactionLevel, verses.length])

  useEffect(() => {
    const timeSinceInteraction = Date.now() - lastInteraction
    if (timeSinceInteraction > 30000 && interactionLevel > 0 && interactionLevel < 20) {
      setShowHint(true)
    }
  }, [lastInteraction, interactionLevel])

  const handleInteraction = () => {
    setLastInteraction(Date.now())
    setShowHint(false)
    
    if (interactionLevel < 20) {
      const newLevel = interactionLevel + 1
      setInteractionLevel(newLevel)
      
      // Update current verse to show the newly unlocked verse
      setCurrentVerse(newLevel - 1)
      
      if (!unlockedVerses.includes(interactionLevel)) {
        setUnlockedVerses(prev => [...prev, interactionLevel])
      }
    }
  }

  const currentVerseData = verses[currentVerse]
  const Icon = currentVerseData?.icon || Heart

  return (
    <section id="gospel" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-50" />
        
        {/* Floating Cross Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0.1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            repeatDelay: 8,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-1/4 w-24 h-24 pointer-events-none"
        >
          <Cross className="w-full h-full text-primary/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text">
              The Greatest Discovery
            </h2>
          </div>
          
          {/* Main Gospel Message - Always Visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20 shadow-xl">
              <CardContent className="p-8 lg:p-12 text-center">
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
                  Just as I build scalable systems in code, Jesus Christ built the ultimate solution for humanity's 
                  greatest problem. Through His death and resurrection, He offers eternal life freely to all who believe.
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
                  <p className="text-primary font-semibold text-xl lg:text-2xl mb-2 leading-relaxed italic">
                    "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved."
                  </p>
                  <p className="text-primary/80 font-medium text-sm">Acts 4:12</p>
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed">
                  This collection contains 20 verses that explain this incredible love story. Ready to explore?
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Interactive Game Section */}
        <div className="max-w-6xl mx-auto">
          {interactionLevel === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center px-4 sm:px-6 lg:px-8"
            >
              <Card className="bg-card border-border hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 max-w-lg w-full group cursor-pointer"
                    onClick={handleInteraction}>
                <CardContent className="p-8 sm:p-10 lg:p-12">
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-shadow duration-300">
                        <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        Scripture Collection
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Dive deeper into God's Word with 20 carefully curated verses
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex justify-center space-x-8 py-4 border-t border-b border-border/50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">20</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Verses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">8</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">From Romans</div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg text-base w-full group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Explore Scripture
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {interactionLevel > 0 && currentVerseData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 sm:px-6 lg:px-8"
            >
              {/* Current Verse Display */}
              <Card className="bg-card border-border shadow-xl max-w-5xl mx-auto">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {/* Verse Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg ${currentVerseData.color} flex-shrink-0`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-primary font-bold text-lg sm:text-xl">
                            {currentVerseData.reference}
                          </h4>
                          <p className="text-muted-foreground text-sm capitalize flex items-center gap-2">
                            <span className="w-2 h-2 bg-current rounded-full opacity-60"></span>
                            {currentVerseData.category}
                          </p>
                        </div>
                      </div>
                      
                      {/* Verse Text */}
                      <div className="bg-muted/30 p-6 sm:p-8 rounded-xl border border-border/50">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentVerse}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                          >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground italic font-medium">
                              "{currentVerseData.text}"
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Progress and Controls */}
                    <div className="space-y-8 text-center lg:text-left">
                      {/* Progress Circle */}
                      <div className="space-y-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 relative">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="50%"
                              cy="50%"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="none"
                              className="text-muted/30"
                            />
                            <motion.circle
                              cx="50%"
                              cy="50%"
                              r="36"
                              stroke="url(#gradient)"
                              strokeWidth="6"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: interactionLevel / 20 }}
                              transition={{ duration: 3.0, ease: "easeOut" }}
                              strokeDasharray={`${1.5 * Math.PI * 36}`}
                              strokeDashoffset={`${1.5 * Math.PI * 36 * (1 - interactionLevel / 20)}`}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--primary))" />
                                <stop offset="100%" stopColor="hsl(var(--accent))" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-lg sm:text-xl font-bold text-primary">
                              {interactionLevel}
                            </span>
                            <span className="text-xs text-muted-foreground">/20</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground text-sm font-medium">
                            Progress
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {Math.round((interactionLevel / 20) * 100)}% discovered
                          </p>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button
                          onClick={handleInteraction}
                          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity w-full sm:w-auto sm:min-w-[180px] py-3"
                          disabled={interactionLevel >= 20}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          {interactionLevel >= 20 ? 'Journey Complete!' : 'Next Verse'}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowFull(true)}
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto sm:min-w-[180px] py-3"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hint System */}
      <AnimatePresence>
        {showHint && interactionLevel > 0 && interactionLevel < 20 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-40 max-w-xs"
          >
            <Card className="bg-gradient-to-br from-yellow-500/90 to-orange-500/90 backdrop-blur-lg border-yellow-400/30 shadow-2xl">
              <CardContent className="p-3 text-center">
                <p className="text-white text-sm font-medium">💡 Keep discovering!</p>
                <p className="text-white/80 text-xs mt-1">Click "Discover Next Verse" for more</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint(false)}
                  className="h-6 px-2 text-xs text-white hover:text-white hover:bg-white/20 mt-2"
                >
                  Got it!
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Scripture Modal */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setShowFull(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              <Card className="bg-card border-primary/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Cross className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold gradient-text mb-2">The Gospel Collection</h2>
                    <p className="text-muted-foreground">Discovered {unlockedVerses.length} out of {verses.length} life-changing verses</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {verses.map((verse, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          unlockedVerses.includes(index) 
                            ? 'bg-muted/30 border-primary/20 shadow-md' 
                            : 'bg-muted/10 border-border/30 opacity-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${verse.color}`}>
                            <verse.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {verse.reference}
                          </span>
                          {unlockedVerses.includes(index) && (
                            <Unlock className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <p className={`text-foreground leading-relaxed text-sm ${
                          !unlockedVerses.includes(index) ? 'blur-sm' : ''
                        }`}>
                          "{verse.text}"
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground capitalize">
                            {verse.category}
                          </span>
                          {!unlockedVerses.includes(index) && (
                            <Lock className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      🎯 The Complete Collection
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You've discovered {unlockedVerses.length} verses that tell the complete story of God's love. 
                      Each verse reveals part of this incredible truth: salvation through Jesus Christ.
                    </p>
                    <p className="text-primary font-semibold text-lg mb-4">
                      "The Lord is not slow in keeping his promise... He is patient with you, not wanting anyone to perish, but everyone to come to repentance." - 2 Peter 3:9
                    </p>
                    <p className="text-accent font-medium text-lg">
                      🙏 Ready to take the next step? It's just one prayer away.
                    </p>
                  </div>

                  <div className="text-center mt-6">
                    <Button
                      onClick={() => setShowFull(false)}
                      className="bg-gradient-to-r from-primary to-accent text-lg px-8 py-3"
                    >
                      Continue Exploring
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ScriptureBanner