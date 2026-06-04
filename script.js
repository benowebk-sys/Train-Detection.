let quizData = [
  {
    id: 1,
    question: "What is the primary purpose of train detection equipment in railway signalling?",
    translation: "ما هو الغرض الأساسي من معدات اكتشاف القطارات في أنظمة إشارات السكك الحديدية؟",
    options: {
      A: {
        text: "To control the speed of the train automatically",
        translation: "للتحكم في سرعة القطار تلقائيًا"
      },
      B: {
        text: "To identify the location and presence of a train on a specific section of track",
        translation: "لتحديد موقع ووجود القطار على جزء معين من السكة"
      },
      C: {
        text: "To provide Wi-Fi connectivity to passengers",
        translation: "لتوفير اتصال واي فاي للركاب"
      },
      D: {
        text: "To measure the weight of the cargo",
        translation: "لقياس وزن الحمولة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The system focuses on knowing whether a section of track is occupied or clear.",
      ar: "يعتمد النظام على معرفة ما إذا كان جزء السكة مشغولًا أو خاليًا."
    }
  },

  {
    id: 2,
    question: "Which component is commonly used in modern Track Circuits to detect a train?",
    translation: "ما المكون المستخدم عادةً في دوائر السكة الحديثة لاكتشاف القطار؟",
    options: {
      A: {
        text: "Proximity sensors on the wheels",
        translation: "حساسات تقارب على العجلات"
      },
      B: {
        text: "The rails themselves acting as conductors",
        translation: "استخدام القضبان نفسها كموصلات كهربائية"
      },
      C: {
        text: "GPS trackers on the locomotive",
        translation: "أجهزة تتبع GPS على القاطرة"
      },
      D: {
        text: "Ultrasonic sensors at stations",
        translation: "حساسات فوق صوتية في المحطات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "In many signalling systems, the track itself becomes part of the electrical circuit.",
      ar: "في كثير من أنظمة الإشارات تصبح السكة نفسها جزءًا من الدائرة الكهربائية."
    }
  },

  {
    id: 3,
    question: "In an electrical track circuit, what happens when a train occupies the block?",
    translation: "في دائرة السكة الكهربائية، ماذا يحدث عندما يشغل القطار البلوك؟",
    options: {
      A: {
        text: "The circuit is completed, increasing the voltage",
        translation: "تكتمل الدائرة ويزداد الجهد"
      },
      B: {
        text: "The train wheels short-circuit the rails, dropping the relay",
        translation: "تقوم عجلات القطار بعمل قصر كهربائي بين القضبان مما يؤدي لسقوط الريلاي"
      },
      C: {
        text: "The resistance of the rails increases significantly",
        translation: "تزداد مقاومة القضبان بشكل كبير"
      },
      D: {
        text: "The power supply is automatically disconnected",
        translation: "يتم فصل مصدر التغذية تلقائيًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Metal wheels and axles create a direct electrical path between both rails.",
      ar: "العجلات والمحاور المعدنية تُكوّن مسارًا كهربائيًا مباشرًا بين القضبان."
    }
  },

  {
    id: 4,
    question: "What is a primary advantage of LED lamps over incandescent lamps in railway signals?",
    translation: "ما الميزة الأساسية لمصابيح LED مقارنة بالمصابيح المتوهجة في إشارات السكك الحديدية؟",
    options: {
      A: {
        text: "They require higher voltage to operate",
        translation: "تحتاج إلى جهد أعلى للتشغيل"
      },
      B: {
        text: "They have a much longer operational life and lower maintenance needs",
        translation: "لها عمر تشغيلي أطول واحتياج أقل للصيانة"
      },
      C: {
        text: "They only work in daylight",
        translation: "تعمل فقط في ضوء النهار"
      },
      D: {
        text: "They are more susceptible to vibration",
        translation: "أكثر تأثرًا بالاهتزاز"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern railway systems prefer lighting solutions that reduce replacement frequency.",
      ar: "تفضل أنظمة السكك الحديثة حلول الإضاءة التي تقلل عمليات الاستبدال المتكررة."
    }
  },

  {
    id: 5,
    question: "Which of these is a characteristic of mechanical rail signalling?",
    translation: "أي مما يلي يُعد من خصائص الإشارات الميكانيكية للسكك الحديدية؟",
    options: {
      A: {
        text: "Uses fiber optic cables for communication",
        translation: "يستخدم كابلات الألياف الضوئية للاتصال"
      },
      B: {
        text: "Relies on physical levers, wires, and rods to move signal arms",
        translation: "يعتمد على الروافع والأسلاك والقضبان لتحريك أذرع الإشارة"
      },
      C: {
        text: "Operated entirely via satellite link",
        translation: "يعمل بالكامل عبر الأقمار الصناعية"
      },
      D: {
        text: "Requires no physical maintenance",
        translation: "لا يحتاج إلى صيانة فعلية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Older systems often depended on manual mechanical movement rather than electronics.",
      ar: "الأنظمة القديمة اعتمدت على الحركة الميكانيكية اليدوية أكثر من الإلكترونيات."
    }
  },

  {
    id: 6,
    question: "What is the function of a Locking Table in signalling operations?",
    translation: "ما وظيفة جدول التداخل (Locking Table) في عمليات الإشارات؟",
    options: {
      A: {
        text: "To list the prices of all equipment",
        translation: "لسرد أسعار جميع المعدات"
      },
      B: {
        text: "To define the safety logic and prevents conflicting signal movements",
        translation: "لتحديد منطق الأمان ومنع الحركات المتعارضة للإشارات"
      },
      C: {
        text: "To keep track of employee work shifts",
        translation: "لمتابعة نوبات عمل الموظفين"
      },
      D: {
        text: "To lock the doors of the train during transit",
        translation: "لقفل أبواب القطار أثناء الحركة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Railway safety systems must stop two dangerous movements from being authorized together.",
      ar: "أنظمة الأمان بالسكك الحديدية تمنع السماح بحركتين خطيرتين في نفس الوقت."
    }
  },

  {
    id: 7,
    question: "An Axle Counter detects a train by:",
    translation: "يقوم عداد المحاور باكتشاف القطار عن طريق:",
    options: {
      A: {
        text: "Measuring the weight of the train",
        translation: "قياس وزن القطار"
      },
      B: {
        text: "Counting the number of wheels entering and leaving a section",
        translation: "عد عدد العجلات الداخلة والخارجة من القطاع"
      },
      C: {
        text: "Sensing the heat from the train engine",
        translation: "استشعار حرارة محرك القطار"
      },
      D: {
        text: "Using cameras to identify the train number",
        translation: "استخدام الكاميرات لتحديد رقم القطار"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The system compares what enters a section with what exits it.",
      ar: "يقارن النظام بين ما يدخل القطاع وما يخرج منه."
    }
  },

  {
    id: 8,
    question: "What is a major deficiency of traditional mechanical signalling?",
    translation: "ما العيب الرئيسي للإشارات الميكانيكية التقليدية؟",
    options: {
      A: {
        text: "It is too fast for modern trains",
        translation: "سريعة جدًا للقطارات الحديثة"
      },
      B: {
        text: "Limited distance of operation due to physical wire expansion and friction",
        translation: "محدودية مسافة التشغيل بسبب تمدد الأسلاك والاحتكاك"
      },
      C: {
        text: "It uses too much electricity",
        translation: "تستهلك كهرباء كثيرة"
      },
      D: {
        text: "It cannot be seen at night",
        translation: "لا يمكن رؤيتها ليلًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical systems become less efficient when movement depends on long physical connections.",
      ar: "تقل كفاءة الأنظمة الميكانيكية عندما تعتمد الحركة على وصلات مادية طويلة."
    }
  },

  {
    id: 9,
    question: "Train Protection equipment is specifically designed to:",
    translation: "تم تصميم معدات حماية القطارات خصيصًا من أجل:",
    options: {
      A: {
        text: "Protect the train from rain and snow",
        translation: "حماية القطار من المطر والثلوج"
      },
      B: {
        text: "Intervene (apply brakes) if a driver fails to obey a signal aspect",
        translation: "التدخل وتفعيل الفرامل إذا لم يلتزم السائق بالإشارة"
      },
      C: {
        text: "Ensure the train stays on the tracks during curves",
        translation: "ضمان بقاء القطار على السكة أثناء المنحنيات"
      },
      D: {
        text: "Clean the tracks as the train moves",
        translation: "تنظيف السكة أثناء حركة القطار"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The system acts as a backup layer when human response is missing.",
      ar: "يعمل النظام كطبقة أمان احتياطية عند غياب استجابة السائق."
    }
  },

  {
    id: 10,
    question: "During Servicing Procedures, what is the most critical factor for a signal technician?",
    translation: "أثناء إجراءات الصيانة، ما العامل الأكثر أهمية لفني الإشارات؟",
    options: {
      A: {
        text: "Ensuring the paint color is bright",
        translation: "التأكد من أن لون الطلاء ساطع"
      },
      B: {
        text: "Verifying that operating parameters (voltage/current) meet safety standards",
        translation: "التحقق من أن قيم التشغيل مثل الجهد والتيار مطابقة لمعايير الأمان"
      },
      C: {
        text: "Checking the passenger manifest",
        translation: "فحص قائمة الركاب"
      },
      D: {
        text: "Cleaning the station platform",
        translation: "تنظيف رصيف المحطة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Reliable signalling depends heavily on accurate electrical performance.",
      ar: "تعتمد موثوقية الإشارات بشكل كبير على الأداء الكهربائي الدقيق."
    }
  },

  {
    id: 11,
    question: "In a standard DC track circuit, how are the relay and the power source typically connected in relation to the rails?",
    translation: "في دائرة سكة تيار مستمر قياسية، كيف يتم توصيل الريلاي ومصدر التغذية بالنسبة للقضبان؟",
    options: {
      A: {
        text: "In series with each other at one end of the block",
        translation: "على التوالي معًا عند أحد طرفي البلوك"
      },
      B: {
        text: "At opposite ends of the track block",
        translation: "عند طرفين متقابلين من بلوك السكة"
      },
      C: {
        text: "Both are connected to only one rail",
        translation: "كلاهما متصل بقضيب واحد فقط"
      },
      D: {
        text: "They are connected via a wireless bridge",
        translation: "متصلان عبر وصلة لاسلكية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The electrical flow must travel across the full monitored section.",
      ar: "يجب أن يمر التيار الكهربائي عبر كامل الجزء المُراقب من السكة."
    }
  },

  {
    id: 12,
    question: "What is the primary defining characteristic of a Series track circuit?",
    translation: "ما السمة الأساسية المميزة لدائرة السكة من النوع التوالي؟",
    options: {
      A: {
        text: "The current flows through the rails in a continuous loop including the relay",
        translation: "يتدفق التيار عبر القضبان في دائرة مستمرة تشمل الريلاي"
      },
      B: {
        text: "The rails are not used as conductors",
        translation: "لا تُستخدم القضبان كموصلات"
      },
      C: {
        text: "Multiple relays are connected in parallel to one battery",
        translation: "عدة ريلايات متصلة على التوازي مع بطارية واحدة"
      },
      D: {
        text: "It is only used for high-speed transit",
        translation: "يستخدم فقط للقطارات عالية السرعة"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "The relay becomes part of one uninterrupted electrical path.",
      ar: "يصبح الريلاي جزءًا من مسار كهربائي متصل واحد."
    }
  },

  {
    id: 13,
    question: "Why is a Parallel track circuit configuration generally preferred for detecting train presence?",
    translation: "لماذا يُفضل عادة استخدام دائرة سكة على التوازي لاكتشاف وجود القطار؟",
    options: {
      A: {
        text: "It uses less copper wiring",
        translation: "تستخدم أسلاك نحاس أقل"
      },
      B: {
        text: "The train wheels provide a low-resistance shunt path across the rails",
        translation: "توفر عجلات القطار مسار قصر منخفض المقاومة بين القضبان"
      },
      C: {
        text: "It allows the train to travel faster",
        translation: "تسمح للقطار بالسير بسرعة أكبر"
      },
      D: {
        text: "It prevents the rails from rusting",
        translation: "تمنع صدأ القضبان"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Metal axles create an easier electrical path than the normal circuit route.",
      ar: "تُنشئ المحاور المعدنية مسارًا كهربائيًا أسهل من المسار الطبيعي للدائرة."
    }
  },

  {
    id: 14,
    question: "What does the term Ballast Resistance refer to in railway signalling?",
    translation: "إلى ماذا يشير مصطلح مقاومة البالاست في إشارات السكك الحديدية؟",
    options: {
      A: {
        text: "The physical weight of the stones under the track",
        translation: "الوزن الفعلي للأحجار أسفل السكة"
      },
      B: {
        text: "The electrical resistance between the two rails through the ground and sleepers",
        translation: "المقاومة الكهربائية بين القضبان عبر الأرض والفلنكات"
      },
      C: {
        text: "The resistance of the train axle",
        translation: "مقاومة محور القطار"
      },
      D: {
        text: "The internal resistance of the signal battery",
        translation: "المقاومة الداخلية لبطارية الإشارة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Moisture and ground conditions strongly influence this type of resistance.",
      ar: "تؤثر الرطوبة وحالة الأرض بشكل كبير على هذا النوع من المقاومة."
    }
  },

  {
    id: 15,
    question: "How does heavy rain typically affect ballast resistance?",
    translation: "كيف يؤثر المطر الغزير عادةً على مقاومة البالاست؟",
    options: {
      A: {
        text: "It increases the resistance",
        translation: "يزيد المقاومة"
      },
      B: {
        text: "It has no effect on electrical properties",
        translation: "ليس له تأثير على الخصائص الكهربائية"
      },
      C: {
        text: "It decreases the resistance, potentially causing a false occupancy",
        translation: "يقلل المقاومة وقد يسبب إشغالًا وهميًا"
      },
      D: {
        text: "It turns the ballast into an insulator",
        translation: "يحول البالاست إلى عازل"
      }
    },
    correctAnswer: "C",
    hint: {
      en: "Water often creates easier electrical leakage paths between rails.",
      ar: "الماء غالبًا ما يخلق مسارات تسريب كهربائي أسهل بين القضبان."
    }
  },

  {
    id: 16,
    question: "If ballast resistance drops too low, what is the likely result for the track relay?",
    translation: "إذا انخفضت مقاومة البالاست بشكل كبير، فما النتيجة المحتملة على ريلاي السكة؟",
    options: {
      A: {
        text: "It will pick up even when a train is present",
        translation: "يلتقط حتى مع وجود قطار"
      },
      B: {
        text: "It may fail to pick up even when the track is clear",
        translation: "قد يفشل في الالتقاط حتى عندما تكون السكة خالية"
      },
      C: {
        text: "The relay will explode due to over-voltage",
        translation: "سينفجر الريلاي بسبب زيادة الجهد"
      },
      D: {
        text: "The signal will automatically turn Green",
        translation: "ستتحول الإشارة تلقائيًا إلى اللون الأخضر"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Electrical leakage can make the system believe the section is occupied.",
      ar: "قد يجعل تسريب التيار النظام يعتقد أن القطاع مشغول."
    }
  },

  {
    id: 17,
    question: "The Fail-Safe principle in signalling ensures that if a component fails:",
    translation: "يضمن مبدأ الأمان Fail-Safe في الإشارات أنه عند فشل أحد المكونات:",
    options: {
      A: {
        text: "The train speeds up to clear the section",
        translation: "يزيد القطار سرعته لتفريغ القطاع"
      },
      B: {
        text: "The system reverts to its most restrictive state",
        translation: "يعود النظام إلى أكثر أوضاعه أمانًا وتقييدًا"
      },
      C: {
        text: "The power is diverted to the station lights",
        translation: "يتم تحويل الطاقة إلى إضاءة المحطة"
      },
      D: {
        text: "The technician is notified by a loud siren",
        translation: "يتم إخطار الفني بصفارة عالية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Railway systems are designed to become safer—not riskier—during faults.",
      ar: "تم تصميم أنظمة السكك لتصبح أكثر أمانًا وليس أكثر خطورة عند حدوث الأعطال."
    }
  },

  {
    id: 18,
    question: "In a fail-safe track circuit, why is the relay kept normally energized?",
    translation: "في دائرة سكة آمنة Fail-Safe، لماذا يبقى الريلاي في وضع التشغيل عادةً؟",
    options: {
      A: {
        text: "To save battery life",
        translation: "لتوفير عمر البطارية"
      },
      B: {
        text: "So that any break in the circuit causes the relay to drop and signal danger",
        translation: "حتى يؤدي أي انقطاع في الدائرة إلى سقوط الريلاي وإظهار الخطر"
      },
      C: {
        text: "To keep the rails warm in winter",
        translation: "للحفاظ على دفء القضبان شتاءً"
      },
      D: {
        text: "Because relays cannot be turned off once started",
        translation: "لأن الريلايات لا يمكن إيقافها بعد تشغيلها"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Loss of electrical continuity should automatically create a safe condition.",
      ar: "يجب أن يؤدي فقدان الاستمرارية الكهربائية تلقائيًا إلى حالة آمنة."
    }
  },

  {
    id: 19,
    question: "What is a major advantage of an AC track circuit over a DC track circuit?",
    translation: "ما الميزة الرئيسية لدائرة السكة بالتيار المتردد مقارنة بالتيار المستمر؟",
    options: {
      A: {
        text: "It is much cheaper to install",
        translation: "أرخص كثيرًا في التركيب"
      },
      B: {
        text: "It is immune to interference from DC traction stray currents",
        translation: "لا تتأثر بتيارات الجر المستمرة المتسربة"
      },
      C: {
        text: "It uses thicker rails",
        translation: "تستخدم قضبان أكثر سماكة"
      },
      D: {
        text: "It does not require a relay",
        translation: "لا تحتاج إلى ريلاي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Different current types help reduce unwanted electrical interference.",
      ar: "اختلاف نوع التيار يساعد في تقليل التداخلات الكهربائية غير المرغوبة."
    }
  },

  {
    id: 20,
    question: "Which frequency is commonly used in specialized AC track circuits to prevent interference?",
    translation: "أي تردد يُستخدم عادةً في دوائر السكة المتخصصة بالتيار المتردد لمنع التداخل؟",
    options: {
      A: {
        text: "0 Hz (Steady DC)",
        translation: "0 هرتز (تيار مستمر ثابت)"
      },
      B: {
        text: "50 Hz or specific audio frequencies",
        translation: "50 هرتز أو ترددات صوتية محددة"
      },
      C: {
        text: "5 GHz (Wi-Fi frequency)",
        translation: "5 جيجاهرتز (تردد الواي فاي)"
      },
      D: {
        text: "100 MHz (FM Radio)",
        translation: "100 ميجاهرتز (راديو FM)"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Railway signalling often selects frequencies separated from traction interference.",
      ar: "تختار إشارات السكك ترددات بعيدة عن تداخلات أنظمة الجر."
    }
  },

  {
    id: 21,
    question: "A Dead Section in a track circuit is:",
    translation: "ما المقصود بالقطاع الميت في دائرة السكة؟",
    options: {
      A: {
        text: "A section where the tracks are being replaced",
        translation: "قطاع يتم فيه استبدال القضبان"
      },
      B: {
        text: "A short gap in the rails where a train cannot be detected",
        translation: "فجوة قصيرة لا يمكن فيها اكتشاف القطار"
      },
      C: {
        text: "A section with no speed limit",
        translation: "قطاع بدون حد سرعة"
      },
      D: {
        text: "A tunnel with no lighting",
        translation: "نفق بدون إضاءة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Certain small rail gaps may temporarily interrupt detection capability.",
      ar: "بعض الفجوات الصغيرة في القضبان قد توقف القدرة على الاكتشاف مؤقتًا."
    }
  },

  {
    id: 22,
    question: "What is the function of an Insulated Rail Joint (IRJ)?",
    translation: "ما وظيفة وصلة القضبان المعزولة IRJ؟",
    options: {
      A: {
        text: "To dampen the noise of the train",
        translation: "لتقليل ضوضاء القطار"
      },
      B: {
        text: "To electrically isolate one track circuit block from the next",
        translation: "لعزل بلوك دائرة سكة كهربائيًا عن الآخر"
      },
      C: {
        text: "To join two rails of different weights",
        translation: "لربط قضبان ذات أوزان مختلفة"
      },
      D: {
        text: "To provide a mounting point for the signal",
        translation: "لتوفير نقطة تثبيت للإشارة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Track circuits must remain electrically separated for accurate detection.",
      ar: "يجب أن تبقى دوائر السكة معزولة كهربائيًا لتحقيق اكتشاف دقيق."
    }
  },

  {
    id: 23,
    question: "In an AC electrified territory, what component allows traction return current to pass while blocking the signalling current?",
    translation: "في مناطق الجر الكهربائي AC، ما المكون الذي يسمح بمرور تيار الجر ويمنع تيار الإشارات؟",
    options: {
      A: {
        text: "A wooden sleeper",
        translation: "فلنكة خشبية"
      },
      B: {
        text: "An Impedance Bond",
        translation: "وصلة ممانعة Impedance Bond"
      },
      C: {
        text: "A plastic cover",
        translation: "غطاء بلاستيكي"
      },
      D: {
        text: "A high-voltage fuse",
        translation: "فيوز جهد عالي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This device separates traction and signalling electrical paths intelligently.",
      ar: "يقوم هذا المكون بالفصل الذكي بين مسارات تيار الجر والإشارات."
    }
  },

  {
    id: 24,
    question: "What is Shunt Resistance?",
    translation: "ما المقصود بمقاومة الشنت؟",
    options: {
      A: {
        text: "The resistance of the air between the rails",
        translation: "مقاومة الهواء بين القضبان"
      },
      B: {
        text: "The resistance provided by the train wheels and axles across the rails",
        translation: "المقاومة الناتجة عن عجلات ومحاور القطار بين القضبان"
      },
      C: {
        text: "The resistance of the signal lamp filament",
        translation: "مقاومة فتيلة مصباح الإشارة"
      },
      D: {
        text: "The resistance of the ground wire",
        translation: "مقاومة السلك الأرضي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The metal contact between wheelsets creates an electrical bypass path.",
      ar: "يُنشئ التلامس المعدني للعجلات والمحاور مسار تجاوز كهربائي."
    }
  },

  {
    id: 25,
    question: "Why must the Pick-up voltage of a relay be higher than its Drop-away voltage?",
    translation: "لماذا يجب أن يكون جهد الالتقاط للريلاي أعلى من جهد الإسقاط؟",
    options: {
      A: {
        text: "To ensure the relay stays energized during minor voltage fluctuations",
        translation: "لضمان بقاء الريلاي في وضع التشغيل أثناء التذبذبات البسيطة"
      },
      B: {
        text: "To make the relay run hotter",
        translation: "لجعل الريلاي أكثر سخونة"
      },
      C: {
        text: "To prevent the relay from ever turning off",
        translation: "لمنع الريلاي من الإيقاف نهائيًا"
      },
      D: {
        text: "There is no difference between the two",
        translation: "لا يوجد فرق بينهما"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Different operating thresholds help the relay remain stable under small variations.",
      ar: "اختلاف قيم التشغيل يساعد الريلاي على الثبات أثناء التغيرات البسيطة."
    }
  },
  
  {
    id: 26,
    question: "What is a False Clear failure?",
    translation: "ما المقصود بعطل الـ False Clear؟",
    options: {
      A: {
        text: "When a signal shows Red when it should be Green",
        translation: "عندما تُظهر الإشارة اللون الأحمر بدلًا من الأخضر"
      },
      B: {
        text: "When a signal shows Green even though a train is in the section",
        translation: "عندما تُظهر الإشارة اللون الأخضر رغم وجود قطار داخل القطاع"
      },
      C: {
        text: "When the station lights turn off",
        translation: "عندما تنطفئ إضاءة المحطة"
      },
      D: {
        text: "When the train driver misses a stop",
        translation: "عندما يفوّت السائق محطة توقف"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The most dangerous signalling failures are the ones that incorrectly indicate a safe path.",
      ar: "أخطر أعطال الإشارات هي التي تعطي مسارًا آمنًا بشكل خاطئ."
    }
  },

  {
    id: 27,
    question: "Which type of track circuit is best suited for long-distance blocks with poor ballast conditions?",
    translation: "أي نوع من دوائر السكة يُناسب البلوكات الطويلة ذات حالة البالاست السيئة؟",
    options: {
      A: {
        text: "High-voltage impulse track circuits",
        translation: "دوائر سكة نبضية عالية الجهد"
      },
      B: {
        text: "Standard low-voltage DC circuits",
        translation: "دوائر تيار مستمر منخفض الجهد"
      },
      C: {
        text: "Mechanical wire circuits",
        translation: "دوائر ميكانيكية سلكية"
      },
      D: {
        text: "Manual observation by staff",
        translation: "المراقبة اليدوية بواسطة العاملين"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Long sections with electrical leakage often require stronger signalling methods.",
      ar: "القطاعات الطويلة ذات التسريب الكهربائي تحتاج عادةً إلى أنظمة إشارات أقوى."
    }
  },

  {
    id: 28,
    question: "The Adjustable Resistor in a track circuit feed is used to:",
    translation: "يُستخدم المقاوم المتغير في تغذية دائرة السكة من أجل:",
    options: {
      A: {
        text: "Change the color of the signal",
        translation: "تغيير لون الإشارة"
      },
      B: {
        text: "Regulate the amount of current sent to the track based on ballast conditions",
        translation: "تنظيم كمية التيار المرسلة للسكة حسب حالة البالاست"
      },
      C: {
        text: "Control the speed of the train",
        translation: "التحكم في سرعة القطار"
      },
      D: {
        text: "Test the strength of the rails",
        translation: "اختبار قوة القضبان"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Electrical settings are often adjusted depending on track leakage conditions.",
      ar: "يتم ضبط الإعدادات الكهربائية حسب ظروف التسريب في السكة."
    }
  },

  {
    id: 29,
    question: "What happens to the relay when a train enters a track circuit?",
    translation: "ماذا يحدث للريلاي عندما يدخل قطار إلى دائرة السكة؟",
    options: {
      A: {
        text: "It becomes more energized",
        translation: "يصبح أكثر تنشيطًا"
      },
      B: {
        text: "It de-energizes because the current is bypassed through the train axles",
        translation: "يفقد التنشيط لأن التيار يمر عبر محاور القطار"
      },
      C: {
        text: "It starts to vibrate at a high frequency",
        translation: "يبدأ بالاهتزاز بتردد عالٍ"
      },
      D: {
        text: "It reverses the direction of the current",
        translation: "يعكس اتجاه التيار"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The train creates a shortcut path that prevents normal relay energization.",
      ar: "يُنشئ القطار مسارًا مختصرًا يمنع التشغيل الطبيعي للريلاي."
    }
  },

  {
    id: 30,
    question: "Which of the following is a Restrictive Aspect?",
    translation: "أي من التالي يُعتبر إشارة تقييدية؟",
    options: {
      A: {
        text: "Green",
        translation: "أخضر"
      },
      B: {
        text: "Yellow or Red",
        translation: "أصفر أو أحمر"
      },
      C: {
        text: "White",
        translation: "أبيض"
      },
      D: {
        text: "Flashing Green",
        translation: "أخضر وامض"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Restrictive aspects warn the driver to slow down or stop.",
      ar: "الإشارات التقييدية تُحذر السائق من التهدئة أو التوقف."
    }
  },

  {
    id: 31,
    question: "What is the primary function of a Neutral Relay in a signalling circuit?",
    translation: "ما الوظيفة الأساسية للريلاي المحايد في دائرة الإشارات؟",
    options: {
      A: {
        text: "To change the voltage from AC to DC",
        translation: "تحويل الجهد من AC إلى DC"
      },
      B: {
        text: "To open or close contacts based on the presence of current, regardless of polarity",
        translation: "فتح أو غلق التلامسات حسب وجود التيار بغض النظر عن القطبية"
      },
      C: {
        text: "To store electrical energy for emergency use",
        translation: "تخزين الطاقة الكهربائية للطوارئ"
      },
      D: {
        text: "To amplify the signal for long-distance transmission",
        translation: "تضخيم الإشارة للنقل لمسافات طويلة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This relay reacts to current flow itself rather than current direction.",
      ar: "يستجيب هذا الريلاي لوجود التيار نفسه وليس لاتجاهه."
    }
  },

  {
    id: 32,
    question: "Which type of relay is specifically designed to remain in its last position even after power is removed?",
    translation: "أي نوع من الريلايات مصمم للبقاء على آخر وضع له حتى بعد فصل التغذية؟",
    options: {
      A: {
        text: "Thermal Relay",
        translation: "ريلاي حراري"
      },
      B: {
        text: "Bi-stable (Latching) Relay",
        translation: "ريلاي ثنائي الاستقرار (Latching)"
      },
      C: {
        text: "Shunt Relay",
        translation: "ريلاي شنت"
      },
      D: {
        text: "Instantaneous Relay",
        translation: "ريلاي لحظي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Some relays are designed to 'remember' their previous mechanical state.",
      ar: "بعض الريلايات مصممة لتحتفظ بحالتها الميكانيكية السابقة."
    }
  },

  {
    id: 33,
    question: "During the maintenance of electro-mechanical relays, what does contact resistance testing check?",
    translation: "أثناء صيانة الريلايات الكهروميكانيكية، ماذا يفحص اختبار مقاومة التلامسات؟",
    options: {
      A: {
        text: "The weight of the relay housing",
        translation: "وزن جسم الريلاي"
      },
      B: {
        text: "The physical gap between the coils",
        translation: "المسافة بين الملفات"
      },
      C: {
        text: "The efficiency of the electrical connection when contacts are closed",
        translation: "كفاءة التوصيل الكهربائي عند غلق التلامسات"
      },
      D: {
        text: "The color of the relay plastic casing",
        translation: "لون الغلاف البلاستيكي للريلاي"
      }
    },
    correctAnswer: "C",
    hint: {
      en: "Poor electrical contact can create unwanted voltage loss and heating.",
      ar: "قد يؤدي سوء التلامس الكهربائي إلى فقد جهد وارتفاع حرارة غير مرغوب."
    }
  },

  {
    id: 34,
    question: "What is a Plug-in relay (Q-style) advantage over older shelf-mounted relays?",
    translation: "ما ميزة الريلاي Plug-in مقارنة بالريلايات القديمة المثبتة على الأرفف؟",
    options: {
      A: {
        text: "They are significantly heavier and more stable",
        translation: "أثقل وأكثر ثباتًا"
      },
      B: {
        text: "They allow for rapid replacement without disturbing the permanent wiring",
        translation: "تسمح بالاستبدال السريع دون التأثير على التوصيلات الدائمة"
      },
      C: {
        text: "They do not require any electricity to operate",
        translation: "لا تحتاج إلى كهرباء للتشغيل"
      },
      D: {
        text: "They can only be installed upside down",
        translation: "يمكن تركيبها مقلوبة فقط"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern maintenance systems value quick replacement and reduced downtime.",
      ar: "أنظمة الصيانة الحديثة تهتم بسرعة الاستبدال وتقليل زمن التوقف."
    }
  },

  {
    id: 35,
    question: "Why is the Alignment of an LED signal head critical during installation?",
    translation: "لماذا تعتبر محاذاة رأس إشارة LED مهمة أثناء التركيب؟",
    options: {
      A: {
        text: "To ensure the signal looks aesthetically pleasing from the station",
        translation: "لجعل الإشارة تبدو جميلة من المحطة"
      },
      B: {
        text: "To focus the light beam specifically at the driver's eye level at a defined distance",
        translation: "لتوجيه حزمة الضوء نحو مستوى رؤية السائق على مسافة محددة"
      },
      C: {
        text: "To prevent the LED from overheating",
        translation: "لمنع سخونة الـ LED"
      },
      D: {
        text: "To make sure the signal points toward the sun",
        translation: "للتأكد من توجيه الإشارة نحو الشمس"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Signal visibility depends heavily on proper beam direction.",
      ar: "تعتمد رؤية الإشارة بشكل كبير على الاتجاه الصحيح للضوء."
    }
  },

  {
    id: 36,
    question: "Unlike incandescent bulbs, LED signal modules are typically composed of:",
    translation: "على عكس المصابيح المتوهجة، تتكون وحدات إشارات LED عادةً من:",
    options: {
      A: {
        text: "A single large glowing filament",
        translation: "فتيلة متوهجة واحدة كبيرة"
      },
      B: {
        text: "Multiple light-emitting diodes arranged in a matrix or cluster",
        translation: "عدة دايودات ضوئية مرتبة كمصفوفة أو مجموعة"
      },
      C: {
        text: "A glass tube filled with neon gas",
        translation: "أنبوب زجاجي مملوء بغاز النيون"
      },
      D: {
        text: "A combustible chemical wick",
        translation: "فتيل كيميائي قابل للاشتعال"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern LED heads achieve brightness using many tiny light sources together.",
      ar: "تحقق إشارات LED السطوع باستخدام العديد من مصادر الضوء الصغيرة."
    }
  },

  {
    id: 37,
    question: "What is the purpose of a Deflecting Lens in a signal head?",
    translation: "ما الغرض من العدسة المنحرفة داخل رأس الإشارة؟",
    options: {
      A: {
        text: "To dim the light during nighttime",
        translation: "لتقليل شدة الضوء ليلًا"
      },
      B: {
        text: "To spread part of the light beam toward a nearby driver",
        translation: "لتوجيه جزء من الضوء نحو السائق القريب من الإشارة"
      },
      C: {
        text: "To change the color from Red to Green",
        translation: "لتغيير اللون من الأحمر إلى الأخضر"
      },
      D: {
        text: "To protect the signal from birds",
        translation: "لحماية الإشارة من الطيور"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Drivers stopped very close to a signal still need clear visibility.",
      ar: "يحتاج السائقون المتوقفون بالقرب من الإشارة إلى رؤية واضحة لها."
    }
  },

  {
    id: 38,
    question: "In signalling power distribution, what is the main role of a Step-Down Transformer?",
    translation: "في توزيع طاقة الإشارات، ما الدور الأساسي للمحول الخافض للجهد؟",
    options: {
      A: {
        text: "To increase the frequency of AC current",
        translation: "زيادة تردد التيار المتردد"
      },
      B: {
        text: "To reduce high distribution voltage to a lower operating voltage",
        translation: "خفض جهد التوزيع العالي إلى جهد تشغيل منخفض"
      },
      C: {
        text: "To convert AC into DC",
        translation: "تحويل AC إلى DC"
      },
      D: {
        text: "To act as a backup battery",
        translation: "العمل كبطارية احتياطية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Many signalling devices operate safely at lower voltages than supply networks.",
      ar: "تعمل معظم أجهزة الإشارات بأمان على جهود أقل من جهود شبكات التغذية."
    }
  },

  {
    id: 39,
    question: "Why are Transformers preferred over resistors for reducing voltage in AC signalling?",
    translation: "لماذا تُفضل المحولات بدلًا من المقاومات لخفض الجهد في إشارات AC؟",
    options: {
      A: {
        text: "They are smaller in size",
        translation: "أصغر حجمًا"
      },
      B: {
        text: "They are more efficient and produce less waste heat",
        translation: "أكثر كفاءة وتنتج حرارة مهدرة أقل"
      },
      C: {
        text: "They can operate without a ground wire",
        translation: "يمكنها العمل بدون تأريض"
      },
      D: {
        text: "They are made of plastic",
        translation: "مصنوعة من البلاستيك"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Efficient power conversion reduces unnecessary energy loss.",
      ar: "تقليل فقد الطاقة يعتمد على كفاءة تحويل القدرة."
    }
  },

  {
    id: 40,
    question: "What does the Turns Ratio of a transformer determine?",
    translation: "ماذا تحدد نسبة اللفات في المحول؟",
    options: {
      A: {
        text: "The speed of the train",
        translation: "سرعة القطار"
      },
      B: {
        text: "The relationship between primary and secondary voltage",
        translation: "العلاقة بين جهد الملف الابتدائي والثانوي"
      },
      C: {
        text: "The maximum height of the signal post",
        translation: "أقصى ارتفاع لعمود الإشارة"
      },
      D: {
        text: "The volume of the warning bell",
        translation: "شدة صوت الجرس"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Voltage conversion depends directly on coil winding proportions.",
      ar: "يعتمد تحويل الجهد مباشرةً على نسبة لفات الملفات."
    }
  },

  {
    id: 41,
    question: "What is the primary job of a Point Machine?",
    translation: "ما الوظيفة الأساسية لماكينة التحويلة Point Machine؟",
    options: {
      A: {
        text: "To count passengers",
        translation: "عد الركاب"
      },
      B: {
        text: "To physically move the switch rails to change a train path",
        translation: "تحريك قضبان التحويلة لتغيير مسار القطار"
      },
      C: {
        text: "To lubricate the tracks",
        translation: "تشحيم القضبان"
      },
      D: {
        text: "To clean locomotive wheels",
        translation: "تنظيف عجلات القاطرة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This equipment controls which route the train will follow.",
      ar: "تتحكم هذه المعدة في المسار الذي سيسلكه القطار."
    }
  },

  {
    id: 42,
    question: "In a Point Machine, Detection contacts are used to:",
    translation: "في ماكينة التحويلة، تُستخدم تلامسات الاكتشاف من أجل:",
    options: {
      A: {
        text: "Detect rust",
        translation: "اكتشاف الصدأ"
      },
      B: {
        text: "Verify the switch rails are locked in the correct position",
        translation: "التحقق من تثبيت قضبان التحويلة في الوضع الصحيح"
      },
      C: {
        text: "Measure motor temperature",
        translation: "قياس حرارة المحرك"
      },
      D: {
        text: "Count switch operations",
        translation: "عد مرات التشغيل"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The signalling system must confirm the route is safely locked before allowing movement.",
      ar: "يجب أن يتأكد نظام الإشارات من تثبيت المسار بأمان قبل السماح بالحركة."
    }
  },

  {
    id: 43,
    question: "What is FPL (Facing Point Lock) in point machines?",
    translation: "ما هو الـ FPL في ماكينات التحويلة؟",
    options: {
      A: {
        text: "A cabin security lock",
        translation: "قفل أمان للكابينة"
      },
      B: {
        text: "A mechanical safety lock preventing movement during train passage",
        translation: "قفل أمان ميكانيكي يمنع حركة التحويلة أثناء مرور القطار"
      },
      C: {
        text: "A digital password",
        translation: "كلمة مرور رقمية"
      },
      D: {
        text: "A rail tightening tool",
        translation: "أداة ربط القضبان"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Switch movement during train passage would create a serious derailment risk.",
      ar: "تحرك التحويلة أثناء مرور القطار قد يسبب خطر خروج خطير عن القضبان."
    }
  },

  {
    id: 44,
    question: "During a Correspondence Test for points, what is being verified?",
    translation: "أثناء اختبار المطابقة للتحويلات، ماذا يتم التحقق منه؟",
    options: {
      A: {
        text: "Matching point and signal numbers",
        translation: "تطابق أرقام التحويلات والإشارات"
      },
      B: {
        text: "The physical position matches the panel indication",
        translation: "تطابق الوضع الفعلي مع الإشارة الظاهرة على لوحة التحكم"
      },
      C: {
        text: "Steel quality of the points",
        translation: "جودة الفولاذ"
      },
      D: {
        text: "Manual movement capability",
        translation: "إمكانية الحركة اليدوية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Operators must see the exact real-world switch position on their control panel.",
      ar: "يجب أن يرى المشغل الوضع الحقيقي للتحويلة على لوحة التحكم."
    }
  },

  {
    id: 45,
    question: "Which component in a point machine protects the motor if the rails are blocked by a stone?",
    translation: "أي مكون في ماكينة التحويلة يحمي المحرك إذا علقت الأحجار بالقضبان؟",
    options: {
      A: {
        text: "Cooling fan",
        translation: "مروحة تبريد"
      },
      B: {
        text: "Friction clutch or overload cut-out",
        translation: "قابض احتكاكي أو قاطع حمل زائد"
      },
      C: {
        text: "Backup motor",
        translation: "محرك احتياطي"
      },
      D: {
        text: "GPS sensor",
        translation: "حساس GPS"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical protection is needed when movement is physically obstructed.",
      ar: "توجد حاجة لحماية ميكانيكية عند وجود عائق يمنع الحركة."
    }
  },

  {
    id: 46,
    question: "What is the standard voltage often used for heavy-duty DC point motors?",
    translation: "ما الجهد القياسي المستخدم غالبًا لمحركات التحويلات DC الثقيلة؟",
    options: {
      A: {
        text: "1.5V",
        translation: "1.5 فولت"
      },
      B: {
        text: "110V",
        translation: "110 فولت"
      },
      C: {
        text: "10,000V",
        translation: "10000 فولت"
      },
      D: {
        text: "12V",
        translation: "12 فولت"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Heavy railway equipment commonly operates at industrial control voltages.",
      ar: "تعمل معدات السكك الثقيلة غالبًا على جهود تحكم صناعية."
    }
  },

  {
    id: 47,
    question: "Phantom Aspects in older signals were caused by:",
    translation: "ما سبب الظواهر الوهمية في الإشارات القديمة؟",
    options: {
      A: {
        text: "Ghosts in the machinery",
        translation: "أشباح داخل المعدات"
      },
      B: {
        text: "Sunlight reflecting off curved lenses",
        translation: "انعكاس ضوء الشمس على العدسات المنحنية"
      },
      C: {
        text: "Low battery voltage",
        translation: "انخفاض جهد البطارية"
      },
      D: {
        text: "Dirty signal lenses",
        translation: "اتساخ العدسات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "External light sources sometimes made inactive signals appear illuminated.",
      ar: "قد تجعل مصادر الضوء الخارجية الإشارات غير المضاءة تبدو وكأنها تعمل."
    }
  },

  {
    id: 48,
    question: "Maintenance of an LED signal head usually involves:",
    translation: "تشمل صيانة رأس إشارة LED عادةً:",
    options: {
      A: {
        text: "Replacing LEDs every month",
        translation: "استبدال الـ LEDs شهريًا"
      },
      B: {
        text: "Cleaning the outer lens and checking the current regulating circuit",
        translation: "تنظيف العدسة وفحص دائرة تنظيم التيار"
      },
      C: {
        text: "Polishing the filament",
        translation: "تلميع الفتيلة"
      },
      D: {
        text: "Painting the LEDs",
        translation: "طلاء الـ LEDs"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern LED systems require more electrical inspection than lamp replacement.",
      ar: "تحتاج أنظمة LED الحديثة إلى فحص كهربائي أكثر من تغيير المصابيح."
    }
  },

  {
    id: 49,
    question: "A Voltage Stabilizer is used in signalling power racks to:",
    translation: "يُستخدم مثبت الجهد في وحدات طاقة الإشارات من أجل:",
    options: {
      A: {
        text: "Keep the train at constant speed",
        translation: "الحفاظ على سرعة القطار"
      },
      B: {
        text: "Maintain stable output voltage despite supply fluctuations",
        translation: "الحفاظ على جهد خرج ثابت رغم تغيرات التغذية"
      },
      C: {
        text: "Increase track resistance",
        translation: "زيادة مقاومة السكة"
      },
      D: {
        text: "Stop power flow to the rails",
        translation: "إيقاف تدفق الطاقة للقضبان"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Sensitive signalling equipment depends on consistent electrical supply levels.",
      ar: "تعتمد معدات الإشارات الحساسة على استقرار مستوى التغذية الكهربائية."
    }
  },

  {
    id: 50,
    question: "What is the Throw of a point machine?",
    translation: "ما المقصود بـ Throw في ماكينة التحويلة؟",
    options: {
      A: {
        text: "The distance the switch rail moves from one side to the other",
        translation: "المسافة التي يتحركها لسان التحويلة من جانب لآخر"
      },
      B: {
        text: "The weight of the switch rails",
        translation: "وزن قضبان التحويلة"
      },
      C: {
        text: "The time for the motor to start",
        translation: "الوقت اللازم لبدء تشغيل المحرك"
      },
      D: {
        text: "The distance between signal and points",
        translation: "المسافة بين الإشارة والتحويلة"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Point machines are measured partly by how far the rail physically shifts.",
      ar: "يتم قياس ماكينات التحويلة جزئيًا بمقدار الحركة الفعلية للقضيب."
    }
  },

  {
    id: 51,
    question: "In mechanical signalling, how is the motion transferred from the lever frame to a distant signal?",
    translation: "في الإشارات الميكانيكية، كيف يتم نقل الحركة من إطار الروافع إلى الإشارة البعيدة؟",
    options: {
      A: {
        text: "Via wireless radio frequencies",
        translation: "عبر موجات راديو لاسلكية"
      },
      B: {
        text: "Through a system of galvanized steel wires and pulleys",
        translation: "من خلال نظام من الأسلاك الفولاذية والبكرات"
      },
      C: {
        text: "Using high-pressure hydraulic fluid",
        translation: "باستخدام سائل هيدروليكي عالي الضغط"
      },
      D: {
        text: "By sending an electrical pulse through the rails",
        translation: "بإرسال نبضة كهربائية عبر القضبان"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Traditional signalling relied heavily on physical mechanical movement.",
      ar: "اعتمدت أنظمة الإشارات التقليدية بشكل أساسي على الحركة الميكانيكية الفعلية."
    }
  },

  {
    id: 52,
    question: "What is the primary purpose of a Wire Compensator in a mechanical signal run?",
    translation: "ما الغرض الأساسي من معوض الأسلاك في مسار الإشارات الميكانيكية؟",
    options: {
      A: {
        text: "To increase the weight of the wire",
        translation: "زيادة وزن السلك"
      },
      B: {
        text: "To automatically adjust wire length due to temperature changes",
        translation: "ضبط طول السلك تلقائيًا مع تغير درجات الحرارة"
      },
      C: {
        text: "To change the color of the signal arm",
        translation: "تغيير لون ذراع الإشارة"
      },
      D: {
        text: "To provide backup power",
        translation: "توفير طاقة احتياطية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Metal expands and contracts depending on environmental temperature.",
      ar: "تتمدد المعادن وتنكمش حسب درجة حرارة البيئة."
    }
  },

  {
    id: 53,
    question: "What happens to a signal wire during a very hot summer day if a compensator is not used?",
    translation: "ماذا يحدث لسلك الإشارة في يوم صيفي شديد الحرارة إذا لم يتم استخدام معوض؟",
    options: {
      A: {
        text: "The wire snaps due to tension",
        translation: "ينقطع السلك بسبب الشد"
      },
      B: {
        text: "The wire sags and may prevent correct signal operation",
        translation: "يرتخي السلك وقد يمنع عمل الإشارة بشكل صحيح"
      },
      C: {
        text: "The wire turns into a magnet",
        translation: "يتحول السلك إلى مغناطيس"
      },
      D: {
        text: "The signal arm spins rapidly",
        translation: "يدور ذراع الإشارة بسرعة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Heat usually causes long metal wires to become longer and less tight.",
      ar: "تؤدي الحرارة غالبًا إلى تمدد الأسلاك المعدنية وفقدان شدها."
    }
  },

  {
    id: 54,
    question: "A Signal Gantry is primarily used to:",
    translation: "ما الاستخدام الأساسي لجسر الإشارات Signal Gantry؟",
    options: {
      A: {
        text: "Store spare parts",
        translation: "تخزين قطع الغيار"
      },
      B: {
        text: "Support multiple signals above several tracks",
        translation: "حمل عدة إشارات فوق عدة خطوط"
      },
      C: {
        text: "Provide a passenger bridge",
        translation: "توفير جسر للمسافرين"
      },
      D: {
        text: "House computer servers",
        translation: "احتواء خوادم الكمبيوتر"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Busy rail yards often require signals to be visible above many parallel tracks.",
      ar: "تتطلب ساحات السكك المزدحمة رؤية الإشارات فوق عدة خطوط متوازية."
    }
  },

  {
    id: 55,
    question: "When maintaining a Signal Gantry, what is a key safety concern regarding its structure?",
    translation: "عند صيانة جسر الإشارات، ما أهم مخاوف السلامة المتعلقة بالهيكل؟",
    options: {
      A: {
        text: "Paint brightness",
        translation: "سطوع الطلاء"
      },
      B: {
        text: "Corrosion and foundation stability",
        translation: "الصدأ وثبات الأساسات"
      },
      C: {
        text: "Wind speed",
        translation: "سرعة الرياح"
      },
      D: {
        text: "Bird nests",
        translation: "أعشاش الطيور"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Large steel structures depend heavily on strong supports and rust prevention.",
      ar: "تعتمد الهياكل الفولاذية الكبيرة بشكل كبير على قوة الأساسات ومنع الصدأ."
    }
  },

  {
    id: 56,
    question: "What is Interlocking in a mechanical lever frame?",
    translation: "ما المقصود بالتشابك Interlocking في إطار الروافع الميكانيكي؟",
    options: {
      A: {
        text: "Locking signal box doors",
        translation: "قفل أبواب برج الإشارات"
      },
      B: {
        text: "A system preventing conflicting lever operations",
        translation: "نظام يمنع تشغيل الروافع المتعارضة"
      },
      C: {
        text: "Connecting trains together",
        translation: "ربط القطارات معًا"
      },
      D: {
        text: "Lubricating levers",
        translation: "تشحيم الروافع"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Railway safety systems prevent dangerous route combinations from being set together.",
      ar: "تمنع أنظمة الأمان بالسكك إعداد مسارات خطيرة ومتعارضة في نفس الوقت."
    }
  },

  {
    id: 57,
    question: "In Tappet Locking, what physical component blocks the movement of other levers?",
    translation: "في نظام Tappet Locking، ما المكون الذي يمنع حركة الروافع الأخرى؟",
    options: {
      A: {
        text: "Rubber seal",
        translation: "ختم مطاطي"
      },
      B: {
        text: "Steel wedges or dogs",
        translation: "أوتاد أو كلبسات فولاذية"
      },
      C: {
        text: "Compressed air",
        translation: "هواء مضغوط"
      },
      D: {
        text: "Magnetic field",
        translation: "مجال مغناطيسي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical locking often relies on strong metal barriers inside the frame.",
      ar: "يعتمد القفل الميكانيكي غالبًا على حواجز معدنية قوية داخل الإطار."
    }
  },

  {
    id: 58,
    question: "Why is Sequential Locking important in a mechanical frame?",
    translation: "لماذا يُعتبر القفل التسلسلي مهمًا في الإطار الميكانيكي؟",
    options: {
      A: {
        text: "To pull the heaviest lever first",
        translation: "لسحب أثقل رافعة أولًا"
      },
      B: {
        text: "To ensure points are set before clearing signals",
        translation: "لضمان ضبط التحويلات قبل فتح الإشارات"
      },
      C: {
        text: "To make levers easier to pull",
        translation: "لتسهيل سحب الروافع"
      },
      D: {
        text: "To count signal operations",
        translation: "لعد مرات تشغيل الإشارة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Safe routing must always be established before movement authority is given.",
      ar: "يجب دائمًا تأمين المسار قبل إعطاء إذن الحركة."
    }
  },

  {
    id: 59,
    question: "The purpose of a Facing Point Lock (FPL) is to:",
    translation: "ما الغرض من قفل التحويلة Facing Point Lock؟",
    options: {
      A: {
        text: "Lock train wheels",
        translation: "قفل عجلات القطار"
      },
      B: {
        text: "Clamp switch rails securely to prevent movement",
        translation: "تثبيت قضبان التحويلة لمنع حركتها"
      },
      C: {
        text: "Stop the driver from viewing signals",
        translation: "منع السائق من رؤية الإشارة"
      },
      D: {
        text: "Automatically grease switches",
        translation: "تشحيم التحويلات تلقائيًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Switch rails must remain firmly fixed while trains pass over them.",
      ar: "يجب تثبيت قضبان التحويلة بإحكام أثناء مرور القطارات."
    }
  },

  {
    id: 60,
    question: "Which lever is typically pulled first to secure a route?",
    translation: "أي رافعة يتم سحبها أولًا عادةً لتأمين المسار؟",
    options: {
      A: {
        text: "Signal lever",
        translation: "رافعة الإشارة"
      },
      B: {
        text: "Point lever first, then the FPL lever",
        translation: "رافعة التحويلة أولًا ثم رافعة القفل"
      },
      C: {
        text: "FPL lever before the Point lever",
        translation: "رافعة القفل قبل التحويلة"
      },
      D: {
        text: "Both simultaneously",
        translation: "كلتاهما معًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The route must be physically positioned before it can be locked securely.",
      ar: "يجب ضبط المسار فعليًا قبل قفله بأمان."
    }
  },

  {
    id: 61,
    question: "A Detector in mechanical signalling is a device that:",
    translation: "ما وظيفة جهاز Detector في الإشارات الميكانيكية؟",
    options: {
      A: {
        text: "Detects trains using sonar",
        translation: "اكتشاف القطارات بالسونار"
      },
      B: {
        text: "Mechanically proves switch rails are correctly positioned",
        translation: "يتحقق ميكانيكيًا من وضع قضبان التحويلة الصحيح"
      },
      C: {
        text: "Detects wind speed",
        translation: "قياس سرعة الرياح"
      },
      D: {
        text: "Measures signal box temperature",
        translation: "قياس حرارة برج الإشارات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Signals should only clear after route alignment is physically confirmed.",
      ar: "يجب ألا تُفتح الإشارة إلا بعد التأكد فعليًا من صحة المسار."
    }
  },

  {
    id: 62,
    question: "What is a Semaphore signal?",
    translation: "ما هي إشارة السيمفور؟",
    options: {
      A: {
        text: "Flashing lights only",
        translation: "أضواء وامضة فقط"
      },
      B: {
        text: "A signal using a moving arm position",
        translation: "إشارة تستخدم وضع ذراع متحرك"
      },
      C: {
        text: "Radio signal to driver tablet",
        translation: "إشارة راديو إلى جهاز السائق"
      },
      D: {
        text: "A whistle sound",
        translation: "صوت صفارة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Older railway signals communicated instructions through arm positions.",
      ar: "كانت إشارات السكك القديمة تنقل التعليمات من خلال أوضاع الأذرع."
    }
  },

  {
    id: 63,
    question: "In the Lower Quadrant semaphore system, the arm moves:",
    translation: "في نظام السيمفور Lower Quadrant، يتحرك الذراع:",
    options: {
      A: {
        text: "Upwards from horizontal",
        translation: "لأعلى من الوضع الأفقي"
      },
      B: {
        text: "Downwards from horizontal to show Clear",
        translation: "لأسفل من الوضع الأفقي لإظهار السماح"
      },
      C: {
        text: "In a full circle",
        translation: "في دائرة كاملة"
      },
      D: {
        text: "Sideways",
        translation: "جانبيًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Different semaphore systems are identified by the direction the arm moves.",
      ar: "تتميز أنظمة السيمفور المختلفة باتجاه حركة الذراع."
    }
  },

  {
    id: 64,
    question: "What color is the Spectacle Glass used to show Danger at night in a semaphore signal?",
    translation: "ما لون عدسة Spectacle Glass المستخدمة لإظهار الخطر ليلًا؟",
    options: {
      A: {
        text: "Green",
        translation: "أخضر"
      },
      B: {
        text: "Red",
        translation: "أحمر"
      },
      C: {
        text: "Yellow",
        translation: "أصفر"
      },
      D: {
        text: "Blue",
        translation: "أزرق"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Railway danger indications traditionally use the same warning color worldwide.",
      ar: "تستخدم إشارات الخطر بالسكك الحديدية نفس اللون التحذيري عالميًا."
    }
  },

  {
    id: 65,
    question: "Cranks and Pulleys in a mechanical run are used to:",
    translation: "تُستخدم Cranks وPulleys في النظام الميكانيكي من أجل:",
    options: {
      A: {
        text: "Increase wire speed",
        translation: "زيادة سرعة السلك"
      },
      B: {
        text: "Change direction of wire or rod runs",
        translation: "تغيير اتجاه الأسلاك أو القضبان"
      },
      C: {
        text: "Generate electricity",
        translation: "توليد الكهرباء"
      },
      D: {
        text: "Monitor train weight",
        translation: "مراقبة وزن القطار"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical systems often need guiding components around bends and obstacles.",
      ar: "تحتاج الأنظمة الميكانيكية إلى مكونات لتوجيه الحركة حول المنحنيات والعوائق."
    }
  },

  {
    id: 66,
    question: "What is the maximum practical distance a mechanical signal can be operated from a signal box?",
    translation: "ما أقصى مسافة عملية لتشغيل إشارة ميكانيكية من برج الإشارات؟",
    options: {
      A: {
        text: "50 kilometers",
        translation: "50 كيلومتر"
      },
      B: {
        text: "Approximately 1,000 to 1,500 yards",
        translation: "حوالي 1000 إلى 1500 ياردة"
      },
      C: {
        text: "Only 10 meters",
        translation: "10 أمتار فقط"
      },
      D: {
        text: "No limit",
        translation: "لا يوجد حد"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical force transmission becomes unreliable over very long distances.",
      ar: "تصبح الحركة الميكانيكية غير موثوقة عند المسافات الطويلة جدًا."
    }
  },

  {
    id: 67,
    question: "Maintenance of a Locking Bed involves:",
    translation: "تشمل صيانة الـ Locking Bed:",
    options: {
      A: {
        text: "Replacing steel bars daily",
        translation: "استبدال القضبان يوميًا"
      },
      B: {
        text: "Cleaning, lubrication, and checking for excessive wear",
        translation: "التنظيف والتشحيم وفحص التآكل"
      },
      C: {
        text: "Painting parts bright red",
        translation: "طلاء الأجزاء بالأحمر"
      },
      D: {
        text: "Cooling metal with water",
        translation: "تبريد المعدن بالماء"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Smooth mechanical movement depends on proper lubrication and low wear.",
      ar: "تعتمد الحركة الميكانيكية السلسة على التشحيم الجيد وتقليل التآكل."
    }
  },

  {
    id: 68,
    question: "A Signal Ladder on a gantry must be inspected for:",
    translation: "يجب فحص سلم الإشارة الموجود على الجسر للتأكد من:",
    options: {
      A: {
        text: "Its color and shine",
        translation: "لونه ولمعانه"
      },
      B: {
        text: "Secure attachment and structural integrity",
        translation: "ثبات التثبيت والسلامة الإنشائية"
      },
      C: {
        text: "Number of steps",
        translation: "عدد الدرجات"
      },
      D: {
        text: "Electrical conductivity",
        translation: "التوصيل الكهربائي"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Technician safety depends on strong and reliable access structures.",
      ar: "تعتمد سلامة الفنيين على متانة وسائل الوصول وثباتها."
    }
  },

  {
    id: 69,
    question: "In mechanical signalling, why is Point Rodding used instead of wire for points?",
    translation: "لماذا يُستخدم Point Rodding بدلًا من الأسلاك في التحويلات الميكانيكية؟",
    options: {
      A: {
        text: "It is cheaper",
        translation: "أرخص"
      },
      B: {
        text: "It can both push and pull heavy switch rails",
        translation: "يمكنه الدفع والسحب لتحريك القضبان الثقيلة"
      },
      C: {
        text: "It is lighter",
        translation: "أخف وزنًا"
      },
      D: {
        text: "It never rusts",
        translation: "لا يصدأ أبدًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Switch rails require force in two movement directions.",
      ar: "تحتاج قضبان التحويلة إلى قوة حركة في اتجاهين."
    }
  },

  {
    id: 70,
    question: "The Catch Handle on a mechanical lever is used to:",
    translation: "ما وظيفة مقبض Catch Handle على الرافعة الميكانيكية؟",
    options: {
      A: {
        text: "Carry the lever",
        translation: "حمل الرافعة"
      },
      B: {
        text: "Release the lever from its locked position",
        translation: "تحرير الرافعة من وضع القفل"
      },
      C: {
        text: "Signal the driver",
        translation: "إعطاء إشارة للسائق"
      },
      D: {
        text: "Heat the lever",
        translation: "تسخين الرافعة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Mechanical levers often require a safety release before movement.",
      ar: "تحتاج الروافع الميكانيكية غالبًا إلى تحرير أمان قبل الحركة."
    }
  },

  {
    id: 71,
    question: "What is the primary function of the Automatic Warning System (AWS)?",
    translation: "ما الوظيفة الأساسية لنظام AWS؟",
    options: {
      A: {
        text: "Steer trains automatically",
        translation: "توجيه القطار تلقائيًا"
      },
      B: {
        text: "Provide audible and visual warnings to the driver",
        translation: "توفير تحذيرات صوتية ومرئية للسائق"
      },
      C: {
        text: "Count passengers",
        translation: "عد الركاب"
      },
      D: {
        text: "Change locomotive radio frequencies",
        translation: "تغيير ترددات الراديو"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The system helps ensure drivers acknowledge upcoming signal conditions.",
      ar: "يساعد النظام السائق على الانتباه للإشارات القادمة."
    }
  },

  {
    id: 72,
    question: "What occurs inside the cab when an AWS sensor passes over a Clear signal magnet?",
    translation: "ماذا يحدث داخل الكابينة عندما يمر حساس AWS فوق مغناطيس إشارة السماح؟",
    options: {
      A: {
        text: "A loud horn and brake application",
        translation: "صفارة عالية وتفعيل الفرامل"
      },
      B: {
        text: "A bell sounds and the indicator turns black",
        translation: "يصدر جرس ويتحول المؤشر إلى اللون الأسود"
      },
      C: {
        text: "Engine shutdown",
        translation: "إيقاف المحرك"
      },
      D: {
        text: "Headlights flash",
        translation: "وميض المصابيح"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Clear conditions usually trigger a simple confirmation rather than a warning alarm.",
      ar: "تؤدي حالات السماح عادةً إلى إشارة تأكيد بسيطة وليست إنذار خطر."
    }
  },

  {
    id: 73,
    question: "The Train Protection & Warning System (TPWS) was primarily designed to:",
    translation: "تم تصميم نظام TPWS أساسًا من أجل:",
    options: {
      A: {
        text: "Replace the driver",
        translation: "استبدال السائق"
      },
      B: {
        text: "Apply brakes if the train passes or approaches a danger signal too fast",
        translation: "تفعيل الفرامل إذا تجاوز القطار إشارة خطر أو اقترب منها بسرعة"
      },
      C: {
        text: "Provide internet",
        translation: "توفير الإنترنت"
      },
      D: {
        text: "Monitor fuel usage",
        translation: "مراقبة استهلاك الوقود"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This protection system intervenes when train speed creates a safety risk.",
      ar: "يتدخل هذا النظام عندما تصبح سرعة القطار خطرًا على السلامة."
    }
  },

  {
    id: 74,
    question: "In a TPWS installation, what are the trackside electronic loops called?",
    translation: "في نظام TPWS، ماذا تُسمى الحلقات الإلكترونية بجانب السكة؟",
    options: {
      A: {
        text: "Resistors",
        translation: "مقاومات"
      },
      B: {
        text: "Transmitters (Grids)",
        translation: "مرسلات (Grids)"
      },
      C: {
        text: "Capacitors",
        translation: "مكثفات"
      },
      D: {
        text: "Antennas",
        translation: "هوائيات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "These devices transmit trackside information directly to the train equipment.",
      ar: "تنقل هذه الأجهزة معلومات السكة مباشرة إلى معدات القطار."
    }
  },

  {
    id: 75,
    question: "How does TPWS determine if a train is overspeeding?",
    translation: "كيف يحدد نظام TPWS أن القطار يسير بسرعة زائدة؟",
    options: {
      A: {
        text: "By wheel heat",
        translation: "من خلال حرارة العجلات"
      },
      B: {
        text: "By measuring travel time between loops",
        translation: "بقياس زمن المرور بين الحلقات"
      },
      C: {
        text: "By asking the driver",
        translation: "بسؤال السائق"
      },
      D: {
        text: "By radar gun",
        translation: "بواسطة رادار"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Speed can be calculated using distance and travel time between fixed points.",
      ar: "يمكن حساب السرعة من خلال المسافة والزمن بين نقطتين ثابتتين."
    }
  },

  {
    id: 76,
    question: "A Balise is a key component in which advanced train protection system?",
    translation: "تُعتبر الـ Balise مكونًا أساسيًا في أي نظام متقدم لحماية القطارات؟",
    options: {
      A: {
        text: "Mechanical Semaphore",
        translation: "السيمفور الميكانيكي"
      },
      B: {
        text: "ETCS/ERTMS (European Train Control System)",
        translation: "نظام ETCS/ERTMS الأوروبي للتحكم في القطارات"
      },
      C: {
        text: "Traditional DC Track Circuits",
        translation: "دوائر القضبان التقليدية DC"
      },
      D: {
        text: "Hand signalling",
        translation: "الإشارات اليدوية"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern European railway protection systems rely heavily on digital track-to-train communication.",
      ar: "تعتمد أنظمة الحماية الأوروبية الحديثة بشكل كبير على الاتصال الرقمي بين السكة والقطار."
    }
  },

  {
    id: 77,
    question: "What is a Fixed Data Balise used for?",
    translation: "ما استخدام الـ Fixed Data Balise؟",
    options: {
      A: {
        text: "Sending train location to stations",
        translation: "إرسال موقع القطار للمحطات"
      },
      B: {
        text: "Providing permanent track data to the onboard computer",
        translation: "تزويد الكمبيوتر الداخلي ببيانات ثابتة عن السكة"
      },
      C: {
        text: "Recharging train batteries",
        translation: "إعادة شحن بطاريات القطار"
      },
      D: {
        text: "Recording driver voice",
        translation: "تسجيل صوت السائق"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Some railway information rarely changes, like gradients and speed restrictions.",
      ar: "بعض معلومات السكة نادرًا ما تتغير مثل الانحدارات وحدود السرعة."
    }
  },

  {
    id: 78,
    question: "How are modern Balises typically powered?",
    translation: "كيف يتم تغذية الـ Balises الحديثة بالطاقة عادةً؟",
    options: {
      A: {
        text: "Underground power cables",
        translation: "كابلات طاقة أرضية"
      },
      B: {
        text: "Tele-powering through induction from the train antenna",
        translation: "التغذية الحثية من هوائي القطار"
      },
      C: {
        text: "Solar panels",
        translation: "ألواح شمسية"
      },
      D: {
        text: "AA batteries",
        translation: "بطاريات AA"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The train itself briefly energizes the equipment as it passes above it.",
      ar: "يقوم القطار نفسه بتغذية الجهاز بالطاقة أثناء مروره فوقه."
    }
  },

  {
    id: 79,
    question: "What is the role of the On-board Computer (EVC) in train protection?",
    translation: "ما دور الكمبيوتر الداخلي EVC في حماية القطارات؟",
    options: {
      A: {
        text: "Playing movies",
        translation: "تشغيل الأفلام"
      },
      B: {
        text: "Comparing trackside data with train speed and status",
        translation: "مقارنة بيانات السكة بسرعة وحالة القطار"
      },
      C: {
        text: "Controlling air conditioning",
        translation: "التحكم في التكييف"
      },
      D: {
        text: "Calculating ticket prices",
        translation: "حساب أسعار التذاكر"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern protection systems continuously evaluate train movement against permitted conditions.",
      ar: "تقوم أنظمة الحماية الحديثة بمراقبة حركة القطار مقارنة بالحدود المسموح بها باستمرار."
    }
  },

  {
    id: 80,
    question: "If a train passes a signal at Danger (SPAD), the TPWS TSS grid will:",
    translation: "إذا تجاوز القطار إشارة خطر SPAD، ماذا سيفعل نظام TSS في TPWS؟",
    options: {
      A: {
        text: "Sound a reminder beep",
        translation: "إطلاق تنبيه بسيط"
      },
      B: {
        text: "Initiate emergency braking",
        translation: "تفعيل فرملة الطوارئ"
      },
      C: {
        text: "Send a text message",
        translation: "إرسال رسالة نصية"
      },
      D: {
        text: "Do nothing",
        translation: "لن يفعل شيئًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Passing a stop signal is treated as an immediate and severe safety risk.",
      ar: "يُعتبر تجاوز إشارة الوقوف خطرًا فوريًا وشديدًا على السلامة."
    }
  },

  {
    id: 81,
    question: "Which component acts as the interface between the trackside AWS magnet and the train?",
    translation: "ما المكون الذي يعمل كواجهة بين مغناطيس AWS والقطار؟",
    options: {
      A: {
        text: "Windshield",
        translation: "الزجاج الأمامي"
      },
      B: {
        text: "AWS Receiver mounted under the locomotive",
        translation: "مستقبل AWS أسفل القاطرة"
      },
      C: {
        text: "Train buffer",
        translation: "مصد القطار"
      },
      D: {
        text: "Pantograph",
        translation: "البانتوجراف"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The sensing device must pass very close to the equipment mounted between the rails.",
      ar: "يجب أن يمر جهاز الاستشعار قريبًا جدًا من المعدات الموجودة بين القضبان."
    }
  },

  {
    id: 82,
    question: "In an AWS system, what happens if the driver does not acknowledge a warning horn?",
    translation: "في نظام AWS ماذا يحدث إذا لم يؤكد السائق سماع التحذير؟",
    options: {
      A: {
        text: "Signal turns green",
        translation: "تتحول الإشارة للأخضر"
      },
      B: {
        text: "Emergency brakes are applied",
        translation: "تُفعّل فرامل الطوارئ"
      },
      C: {
        text: "Train lights turn off",
        translation: "تنطفئ أضواء القطار"
      },
      D: {
        text: "Horn becomes quieter",
        translation: "يصبح التنبيه أهدأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "The system assumes danger if the driver fails to respond within the allowed time.",
      ar: "يفترض النظام وجود خطر إذا لم يستجب السائق خلال الزمن المحدد."
    }
  },

  {
    id: 83,
    question: "Why are TPWS loops usually installed in pairs?",
    translation: "لماذا يتم تركيب حلقات TPWS عادةً في أزواج؟",
    options: {
      A: {
        text: "In case one is stolen",
        translation: "في حالة سرقة واحدة"
      },
      B: {
        text: "To calculate train speed using timing",
        translation: "لحساب سرعة القطار باستخدام الزمن"
      },
      C: {
        text: "For symmetry",
        translation: "للتناسق"
      },
      D: {
        text: "One for workers",
        translation: "واحدة للعمال"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Speed calculations require measuring movement between two fixed points.",
      ar: "يتطلب حساب السرعة قياس الحركة بين نقطتين ثابتتين."
    }
  },

  {
    id: 84,
    question: "What is a Transparent Balise?",
    translation: "ما المقصود بـ Transparent Balise؟",
    options: {
      A: {
        text: "A glass balise",
        translation: "Balise زجاجية"
      },
      B: {
        text: "A balise that changes its message depending on signal conditions",
        translation: "Balise تغيّر رسالتها حسب حالة الإشارة"
      },
      C: {
        text: "Invisible balise",
        translation: "Balise غير مرئية"
      },
      D: {
        text: "A balise with no data",
        translation: "Balise بدون بيانات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Some track devices provide dynamic information instead of fixed data only.",
      ar: "توفّر بعض أجهزة السكة معلومات متغيرة وليست ثابتة فقط."
    }
  },

  {
    id: 85,
    question: "The term Brake Interface refers to:",
    translation: "إلى ماذا يشير مصطلح Brake Interface؟",
    options: {
      A: {
        text: "Driver brake handle",
        translation: "مقبض الفرامل"
      },
      B: {
        text: "The connection allowing protection systems to activate brakes",
        translation: "الوصلة التي تسمح للنظام بتفعيل الفرامل"
      },
      C: {
        text: "Brake grease",
        translation: "شحم الفرامل"
      },
      D: {
        text: "Brake temperature screen",
        translation: "شاشة حرارة الفرامل"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Safety systems need a direct way to command emergency stopping.",
      ar: "تحتاج أنظمة الأمان إلى وسيلة مباشرة للتحكم في إيقاف القطار."
    }
  },

  {
    id: 86,
    question: "What is the primary purpose of an Insulation Resistance test on signalling cables?",
    translation: "ما الغرض الأساسي من اختبار مقاومة العزل لكابلات الإشارات؟",
    options: {
      A: {
        text: "Check cable length",
        translation: "فحص طول الكابل"
      },
      B: {
        text: "Ensure insulation prevents current leakage",
        translation: "التأكد من منع تسرب التيار"
      },
      C: {
        text: "Measure cable weight",
        translation: "قياس وزن الكابل"
      },
      D: {
        text: "Check flexibility",
        translation: "فحص المرونة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Healthy insulation keeps electricity flowing only where intended.",
      ar: "العزل الجيد يمنع تسرب الكهرباء إلى أماكن غير مرغوبة."
    }
  },

  {
    id: 87,
    question: "Which instrument is used to perform an Insulation Resistance test?",
    translation: "ما الجهاز المستخدم لإجراء اختبار مقاومة العزل؟",
    options: {
      A: {
        text: "Thermometer",
        translation: "ترمومتر"
      },
      B: {
        text: "Megger",
        translation: "ميجر"
      },
      C: {
        text: "Spirit level",
        translation: "ميزان مياه"
      },
      D: {
        text: "Tape measure",
        translation: "شريط قياس"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Electrical insulation testing requires a dedicated high-resistance measuring device.",
      ar: "يتطلب اختبار العزل جهازًا متخصصًا لقياس المقاومات العالية."
    }
  },

  {
    id: 88,
    question: "Before performing an IR test on a circuit, what is the most important safety step?",
    translation: "قبل إجراء اختبار IR على دائرة كهربائية، ما أهم خطوة أمان؟",
    options: {
      A: {
        text: "Paint the wires",
        translation: "طلاء الأسلاك"
      },
      B: {
        text: "Disconnect power and isolate sensitive electronics",
        translation: "فصل الطاقة وعزل المكونات الحساسة"
      },
      C: {
        text: "Increase battery voltage",
        translation: "زيادة جهد البطارية"
      },
      D: {
        text: "Call the driver",
        translation: "الاتصال بالسائق"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Testing equipment can damage live or sensitive electronic systems if not isolated first.",
      ar: "قد تتلف أجهزة الاختبار الدوائر الحية أو الحساسة إذا لم يتم عزلها أولًا."
    }
  },

  {
    id: 89,
    question: "A low insulation resistance reading typically indicates:",
    translation: "ماذا يشير انخفاض قراءة مقاومة العزل عادةً؟",
    options: {
      A: {
        text: "Perfect operation",
        translation: "تشغيل مثالي"
      },
      B: {
        text: "Moisture or damaged insulation",
        translation: "رطوبة أو تلف بالعزل"
      },
      C: {
        text: "Fully charged battery",
        translation: "بطارية مشحونة"
      },
      D: {
        text: "Cold rails",
        translation: "قضبان باردة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Electrical leakage is commonly caused by water ingress or insulation deterioration.",
      ar: "يحدث تسرب الكهرباء غالبًا بسبب الرطوبة أو تلف العزل."
    }
  },

  {
    id: 90,
    question: "What is a Periodic Inspection in railway maintenance?",
    translation: "ما المقصود بالفحص الدوري في صيانة السكك الحديدية؟",
    options: {
      A: {
        text: "Inspection after accidents only",
        translation: "فحص بعد الحوادث فقط"
      },
      B: {
        text: "Routine scheduled inspection to prevent failures",
        translation: "فحص دوري لمنع الأعطال"
      },
      C: {
        text: "Driver training session",
        translation: "تدريب السائق"
      },
      D: {
        text: "Station cleaning",
        translation: "تنظيف المحطة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Preventive maintenance aims to discover problems before breakdowns occur.",
      ar: "تهدف الصيانة الوقائية إلى اكتشاف المشكلات قبل حدوث الأعطال."
    }
  },

  {
    id: 91,
    question: "How often are safety-critical relays usually tested?",
    translation: "كم مرة يتم اختبار الريلايات الحرجة للسلامة عادةً؟",
    options: {
      A: {
        text: "Every day",
        translation: "كل يوم"
      },
      B: {
        text: "At defined intervals according to safety standards",
        translation: "على فترات محددة حسب معايير السلامة"
      },
      C: {
        text: "Only after failure",
        translation: "بعد العطل فقط"
      },
      D: {
        text: "Never",
        translation: "أبدًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Critical railway equipment follows strict scheduled maintenance rules.",
      ar: "تخضع معدات السكك الحرجة لجداول صيانة صارمة."
    }
  },

  {
    id: 92,
    question: "When working on live tracks, what is the primary role of a Lookout?",
    translation: "عند العمل على خطوط حية، ما الدور الأساسي لـ Lookout؟",
    options: {
      A: {
        text: "Carry tools",
        translation: "حمل الأدوات"
      },
      B: {
        text: "Watch for approaching trains and warn workers",
        translation: "مراقبة القطارات وتحذير العمال"
      },
      C: {
        text: "Take photos",
        translation: "التقاط الصور"
      },
      D: {
        text: "Clean tracks",
        translation: "تنظيف السكة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Dedicated safety observers focus only on detecting approaching hazards.",
      ar: "يركز مراقبو السلامة فقط على اكتشاف الأخطار القادمة."
    }
  },

  {
    id: 93,
    question: "What does Taking a Block mean in track safety protocols?",
    translation: "ما معنى Taking a Block في إجراءات سلامة السكة؟",
    options: {
      A: {
        text: "Building a wall",
        translation: "بناء جدار"
      },
      B: {
        text: "Closing a track section for maintenance safety",
        translation: "إغلاق جزء من الخط لأعمال الصيانة"
      },
      C: {
        text: "Stopping the station clock",
        translation: "إيقاف ساعة المحطة"
      },
      D: {
        text: "Blocking signal visibility",
        translation: "حجب الإشارة"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Maintenance teams often require exclusive access to a protected track section.",
      ar: "تحتاج فرق الصيانة إلى عزل جزء من الخط للعمل بأمان."
    }
  },

  {
    id: 94,
    question: "Which equipment is often used by a lookout to warn workers of approaching trains?",
    translation: "ما الأداة التي يستخدمها الـ Lookout غالبًا لتحذير العمال من القطارات القادمة؟",
    options: {
      A: {
        text: "Flashlight",
        translation: "كشاف"
      },
      B: {
        text: "Loud whistle or air horn",
        translation: "صافرة أو بوق هوائي"
      },
      C: {
        text: "Music megaphone",
        translation: "مكبر صوت للموسيقى"
      },
      D: {
        text: "Green flag",
        translation: "علم أخضر"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Workers need a warning signal that is loud enough to overcome railway noise.",
      ar: "يحتاج العمال إلى تحذير صوتي قوي يتغلب على ضوضاء السكك."
    }
  },

  {
    id: 95,
    question: "Why is Logbook Documentation vital after servicing procedures?",
    translation: "لماذا يعتبر توثيق السجلات Logbook مهمًا بعد أعمال الصيانة؟",
    options: {
      A: {
        text: "Practice handwriting",
        translation: "التدرب على الكتابة"
      },
      B: {
        text: "Provide legal and technical records",
        translation: "توفير سجلات قانونية وفنية"
      },
      C: {
        text: "Fill office space",
        translation: "ملء مساحة المكتب"
      },
      D: {
        text: "List passengers",
        translation: "تسجيل الركاب"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Maintenance records are essential for accountability and future troubleshooting.",
      ar: "تعتبر سجلات الصيانة ضرورية للمساءلة وتتبع الأعطال مستقبلاً."
    }
  },

  {
    id: 96,
    question: "If a technician changes a circuit, what must happen to the As-Built drawings?",
    translation: "إذا قام الفني بتعديل دائرة كهربائية، ماذا يجب أن يحدث لمخططات As-Built؟",
    options: {
      A: {
        text: "Throw them away",
        translation: "يتم التخلص منها"
      },
      B: {
        text: "Update them to reflect the actual installation",
        translation: "تحديثها لتعكس الوضع الحقيقي"
      },
      C: {
        text: "Highlight them",
        translation: "تلوينها"
      },
      D: {
        text: "Hide them",
        translation: "إخفاؤها"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Technical drawings must always match the real field installation.",
      ar: "يجب أن تطابق الرسومات الفنية دائمًا التركيب الفعلي بالموقع."
    }
  },

  {
    id: 97,
    question: "Compliance with Locking Tables during maintenance ensures that:",
    translation: "ماذا يضمن الالتزام بجداول الـ Locking أثناء الصيانة؟",
    options: {
      A: {
        text: "Office doors stay locked",
        translation: "بقاء الأبواب مغلقة"
      },
      B: {
        text: "Safety logic between signals and points remains intact",
        translation: "الحفاظ على منطق الأمان بين الإشارات والتحويلات"
      },
      C: {
        text: "Furniture arrangement",
        translation: "ترتيب الأثاث"
      },
      D: {
        text: "Wheel locking",
        translation: "قفل العجلات"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Interlocking logic is critical to preventing unsafe train movements.",
      ar: "يُعتبر منطق التشابك أساسيًا لمنع الحركات الخطرة للقطارات."
    }
  },

  {
    id: 98,
    question: "If a Safety Critical defect is found, what should the technician do?",
    translation: "إذا تم اكتشاف عطل حرج للسلامة، ماذا يجب على الفني أن يفعل؟",
    options: {
      A: {
        text: "Wait until shift ends",
        translation: "الانتظار لنهاية الوردية"
      },
      B: {
        text: "Report immediately and protect the line",
        translation: "الإبلاغ فورًا وتأمين الخط"
      },
      C: {
        text: "Ignore it",
        translation: "تجاهله"
      },
      D: {
        text: "Use temporary tape secretly",
        translation: "استخدام شريط لاصق مؤقتًا"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Safety-related defects require immediate action to prevent accidents.",
      ar: "تتطلب الأعطال المتعلقة بالسلامة تدخلاً فوريًا لمنع الحوادث."
    }
  },

  {
    id: 99,
    question: "During a Point Obstruction Test, a gauge is placed between the switch and stock rail to verify that:",
    translation: "أثناء اختبار عائق التحويلة، يتم وضع Gauge بين القضيبين للتحقق من:",
    options: {
      A: {
        text: "Rail flexibility",
        translation: "مرونة القضبان"
      },
      B: {
        text: "The points will not lock if obstructed",
        translation: "أن التحويلة لن تُقفل إذا وُجد عائق"
      },
      C: {
        text: "Wheels jump over stones",
        translation: "قفز العجلات فوق الحجر"
      },
      D: {
        text: "Motor temperature",
        translation: "حرارة المحرك"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Safety systems must detect even small obstructions before allowing movement.",
      ar: "يجب أن تكتشف أنظمة الأمان أي عائق قبل السماح بالحركة."
    }
  },

  {
    id: 100,
    question: "The term Personal Track Safety (PTS) refers to:",
    translation: "إلى ماذا يشير مصطلح Personal Track Safety (PTS)؟",
    options: {
      A: {
        text: "Rules and qualifications for safe work near tracks",
        translation: "قواعد وتأهيلات العمل الآمن قرب الخطوط"
      },
      B: {
        text: "Travel insurance",
        translation: "تأمين السفر"
      },
      C: {
        text: "Driver speed limit",
        translation: "حد سرعة السائق"
      },
      D: {
        text: "Comfortable worker seats",
        translation: "مقاعد مريحة للعمال"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway workers require certified safety procedures before entering operational tracks.",
      ar: "يحتاج عمال السكك إلى إجراءات سلامة معتمدة قبل دخول الخطوط التشغيلية."
    }
  }
];

const trueFalseQuestions = [
  {
    id: 1,
    question: "The primary purpose of train detection equipment in railway signaling is to identify the location and presence of a train on a specific section of track.",
    translation: "الغرض الأساسي من معدات كشف القطارات في إشارات السكك الحديدية هو تحديد موقع ووجود القطار على جزء معين من السكة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Safe train movement depends on always knowing whether a track section is occupied.",
      ar: "تعتمد سلامة حركة القطارات على معرفة ما إذا كان القطاع مشغولًا أم لا."
    }
  },

  {
    id: 2,
    question: "Modern Track Circuits commonly utilize the rails themselves as conductors to detect the presence of a train.",
    translation: "تستخدم دوائر السكة الحديثة القضبان نفسها كموصلات لاكتشاف وجود القطار.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "The railway track is not only for movement, but also part of the electrical circuit.",
      ar: "لا تُستخدم القضبان للحركة فقط بل تدخل أيضًا ضمن الدائرة الكهربائية."
    }
  },

  {
    id: 3,
    question: "In an electrical track circuit, when a train occupies a block, the wheels and axles create a short-circuit across the rails, causing the track relay to drop.",
    translation: "في دائرة السكة الكهربائية، عندما يشغل القطار قطاعًا معينًا فإن العجلات والمحاور تُحدث قصرًا كهربائيًا بين القضبان مما يؤدي إلى فصل الريلاي.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Metal wheels provide a low-resistance path between the rails.",
      ar: "توفر العجلات المعدنية مسارًا منخفض المقاومة بين القضبان."
    }
  },

  {
    id: 4,
    question: "LED lamps are preferred over incandescent lamps in railway signals because they require higher voltage to operate and are more susceptible to vibration.",
    translation: "تُفضل مصابيح LED على المصابيح المتوهجة لأنها تحتاج جهدًا أعلى وتكون أكثر تأثرًا بالاهتزازات.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Modern railway lighting technology focuses on durability and reduced maintenance.",
      ar: "تركز تقنيات الإضاءة الحديثة في السكك الحديدية على التحمل وتقليل الصيانة."
    }
  },

  {
    id: 5,
    question: "Mechanical rail signaling is characterized by its reliance on physical levers, wires, and rods to move signal arms and points.",
    translation: "تعتمد الإشارات الميكانيكية للسكك الحديدية على الروافع والأسلاك والقضبان لتحريك الإشارات والتحويلات.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Older railway systems depended on direct mechanical movement rather than electronics.",
      ar: "اعتمدت أنظمة السكك القديمة على الحركة الميكانيكية المباشرة بدل الإلكترونيات."
    }
  },

  {
    id: 6,
    question: "The function of a Locking Table is to define the safety logic that prevents conflicting signal movements and unsafe route setting.",
    translation: "وظيفة جدول الـ Locking هي تحديد منطق الأمان لمنع الحركات المتعارضة وضبط المسارات غير الآمنة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Interlocking rules are essential to stop unsafe train routes from being established.",
      ar: "تُعتبر قواعد التشابك ضرورية لمنع إنشاء مسارات قطارات غير آمنة."
    }
  },

  {
    id: 7,
    question: "An Axle Counter detects the presence of a train by sensing the heat generated by the train’s braking system as it enters a section.",
    translation: "يقوم عداد المحاور بكشف القطار عن طريق استشعار الحرارة الناتجة من نظام الفرامل.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This equipment focuses on wheel movement rather than temperature measurement.",
      ar: "تركز هذه المعدات على حركة العجلات وليس قياس الحرارة."
    }
  },

  {
    id: 8,
    question: "Traditional mechanical signaling is limited in its operational distance primarily due to the physical friction and expansion of the wires and rods.",
    translation: "تُحدَّد مسافة تشغيل الإشارات الميكانيكية بسبب الاحتكاك والتمدد في الأسلاك والقضبان.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Long mechanical runs become difficult because physical movement is affected by distance and weather.",
      ar: "تصبح المسافات الطويلة صعبة بسبب تأثير المسافة والطقس على الحركة الميكانيكية."
    }
  },

  {
    id: 9,
    question: "Train Protection equipment is designed to automatically intervene and apply the brakes if a driver fails to obey a signal aspect.",
    translation: "تم تصميم معدات حماية القطارات للتدخل تلقائيًا وتفعيل الفرامل إذا لم يلتزم السائق بالإشارة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Modern safety systems can override human mistakes in dangerous situations.",
      ar: "يمكن لأنظمة السلامة الحديثة التدخل لتصحيح أخطاء البشر في المواقف الخطرة."
    }
  },

  {
    id: 10,
    question: "During Servicing Procedures, the most critical factor for a signal technician is verifying that electrical operating parameters meet safety standards.",
    translation: "أثناء إجراءات الصيانة، فإن أهم عامل لفني الإشارات هو التأكد من توافق القيم الكهربائية مع معايير السلامة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Reliable signaling depends heavily on correct electrical performance.",
      ar: "تعتمد موثوقية الإشارات بشكل كبير على الأداء الكهربائي الصحيح."
    }
  },

  {
    id: 11,
    question: "In a standard DC track circuit, the relay and power source are typically connected at opposite ends of the track block.",
    translation: "في دائرة سكة DC القياسية يتم توصيل مصدر التغذية والريلاي عند طرفين متقابلين من القطاع.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Track current usually travels from one end of the section to the other.",
      ar: "عادةً ما يسير تيار السكة من أحد طرفي القطاع إلى الطرف الآخر."
    }
  },

  {
    id: 12,
    question: "The defining characteristic of a Series track circuit is that the current flows through the rails in a continuous loop including the relay.",
    translation: "الميزة الأساسية لدائرة السكة Series هي مرور التيار في حلقة مستمرة تشمل الريلاي.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Series configurations rely on one continuous electrical path.",
      ar: "تعتمد دوائر Series على وجود مسار كهربائي مستمر واحد."
    }
  },

  {
    id: 13,
    question: "A Parallel track circuit configuration is preferred because the train wheels provide a low resistance shunt path across the rails.",
    translation: "يُفضل نظام Parallel لأن عجلات القطار توفر مسار قصر منخفض المقاومة بين القضبان.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "The train effectively bypasses the relay current path.",
      ar: "يقوم القطار فعليًا بتحويل مسار التيار بعيدًا عن الريلاي."
    }
  },

  {
    id: 14,
    question: "Ballast Resistance refers to the electrical resistance of the train axle as it passes over the ballast stones.",
    translation: "تشير مقاومة البالاست إلى المقاومة الكهربائية لمحور القطار أثناء مروره فوق الحجارة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "This concept relates to leakage paths between rails through the ground structure.",
      ar: "يرتبط هذا المفهوم بمسارات تسرب التيار بين القضبان عبر الأرض."
    }
  },

  {
    id: 15,
    question: "Heavy rain typically increases ballast resistance, making train detection easier.",
    translation: "تؤدي الأمطار الغزيرة عادةً إلى زيادة مقاومة البالاست مما يسهل كشف القطار.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Water usually improves electrical conductivity rather than reducing it.",
      ar: "تزيد المياه عادةً من التوصيل الكهربائي بدل تقليله."
    }
  },

  {
    id: 16,
    question: "If ballast resistance drops too low, the track relay may fail to energize even when the track is clear.",
    translation: "إذا انخفضت مقاومة البالاست بشدة فقد يفشل الريلاي في الالتقاط حتى إذا كان القطاع خاليًا.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Electrical leakage can imitate the effect of train occupancy.",
      ar: "يمكن أن يحاكي تسرب التيار تأثير وجود قطار."
    }
  },

  {
    id: 17,
    question: "The Fail-Safe principle ensures that a failed component forces the system into its safest restrictive condition.",
    translation: "يضمن مبدأ Fail-Safe انتقال النظام إلى أكثر الحالات أمانًا عند حدوث عطل.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway systems are designed to treat uncertainty as danger.",
      ar: "تتعامل أنظمة السكك مع أي حالة غير مؤكدة على أنها خطر."
    }
  },

  {
    id: 18,
    question: "In a fail-safe track circuit, the relay is normally kept de-energized to save energy.",
    translation: "في دوائر Fail-Safe يتم إبقاء الريلاي مفصولًا عادةً لتوفير الطاقة.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Loss of power itself must trigger a safe condition.",
      ar: "يجب أن يؤدي فقدان الطاقة نفسه إلى حالة آمنة."
    }
  },

  {
    id: 19,
    question: "One advantage of AC track circuits is resistance to interference from DC traction stray currents.",
    translation: "من مزايا دوائر السكة AC مقاومتها للتداخل الناتج عن تيارات الجر DC.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Different current types help reduce unwanted electrical interaction.",
      ar: "يساعد اختلاف نوع التيار على تقليل التداخل الكهربائي غير المرغوب."
    }
  },

  {
    id: 20,
    question: "Audio Frequency Track Circuits commonly use 50 Hz or specific audio frequencies to avoid interference.",
    translation: "تستخدم دوائر AF Track Circuits ترددات صوتية أو 50Hz لتجنب التداخل.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Frequency separation is a common technique in signaling electronics.",
      ar: "يُعتبر فصل الترددات تقنية شائعة في إلكترونيات الإشارات."
    }
  },

  {
    id: 21,
    question: "A Dead Section is a small rail gap where a train cannot be detected.",
    translation: "الـ Dead Section عبارة عن فجوة صغيرة لا يمكن كشف القطار خلالها.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Very short gaps in detection coverage can exist between adjacent sections.",
      ar: "قد توجد فجوات قصيرة جدًا بين قطاعات الكشف المتجاورة."
    }
  },

  {
    id: 22,
    question: "An Insulated Rail Joint electrically separates one track circuit block from another.",
    translation: "يقوم الـ Insulated Rail Joint بعزل قطاع سكة كهربائيًا عن قطاع آخر.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Separate electrical sections require isolation between rails.",
      ar: "تحتاج القطاعات الكهربائية المنفصلة إلى عزل بين القضبان."
    }
  },

  {
    id: 23,
    question: "An Impedance Bond allows traction return current to pass while blocking signaling current.",
    translation: "يسمح الـ Impedance Bond بمرور تيار الجر ويمنع تيار الإشارات.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway electrification systems often need electrical separation between power and signaling circuits.",
      ar: "تحتاج أنظمة كهربة السكك إلى فصل كهربائي بين دوائر القدرة والإشارات."
    }
  },

  {
    id: 24,
    question: "Shunt Resistance refers to the resistance created by the train wheels and axles across the rails.",
    translation: "تشير مقاومة الـ Shunt إلى المقاومة الناتجة عن عجلات ومحاور القطار بين القضبان.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "A",
    hint: {
      en: "Metal wheelsets create an electrical connection across the track.",
      ar: "تُنشئ العجلات المعدنية اتصالًا كهربائيًا بين القضبان."
    }
  },

  {
    id: 25,
    question: "The Pick-up voltage of a relay is intentionally designed to be lower than its Drop-away voltage.",
    translation: "يتم تصميم جهد الـ Pick-up ليكون أقل من جهد الـ Drop-away.",
    options: {
      A: {
        text: "True",
        translation: "صح"
      },
      B: {
        text: "False",
        translation: "خطأ"
      }
    },
    correctAnswer: "B",
    hint: {
      en: "Relays need stability against small voltage fluctuations during operation.",
      ar: "تحتاج الريلايات إلى الثبات ضد التغيرات الصغيرة في الجهد أثناء التشغيل."
    }
  },

  {
    id: 26,
    question: "A False Clear failure occurs when a signal shows Green even though a train is in that section.",
    translation: "يحدث عطل الـ False Clear عندما تُظهر الإشارة اللون الأخضر رغم وجود قطار داخل القطاع.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "One of the most dangerous signaling failures is when the system believes the track is clear while it is actually occupied.",
      ar: "من أخطر أعطال الإشارات أن يعتبر النظام القطاع خاليًا رغم وجود قطار بداخله."
    }
  },

  {
    id: 27,
    question: "High-voltage impulse track circuits are best suited for long-distance blocks with poor ballast conditions.",
    translation: "تُعتبر دوائر السكة النبضية ذات الجهد العالي مناسبة للقطاعات الطويلة ذات ظروف البالاست السيئة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Certain track circuits are specially designed to handle current leakage over long distances.",
      ar: "تم تصميم بعض دوائر السكة خصيصًا للتعامل مع تسرب التيار عبر المسافات الطويلة."
    }
  },

  {
    id: 28,
    question: "The Adjustable Resistor in a track circuit feed regulates the current sent to the track based on ballast conditions.",
    translation: "يقوم المقاوم المتغير في تغذية دائرة السكة بتنظيم التيار المرسل وفقًا لحالة البالاست.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Electrical adjustments are sometimes needed to compensate for changing track conditions.",
      ar: "تحتاج الدوائر الكهربائية أحيانًا إلى ضبط للتعويض عن تغير ظروف السكة."
    }
  },

  {
    id: 29,
    question: "When a train enters a track circuit, the relay de-energizes because the current is bypassed through the train's axles.",
    translation: "عند دخول القطار إلى دائرة السكة يفصل الريلاي لأن التيار يمر عبر محاور القطار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Metal wheelsets create an alternate low-resistance electrical path.",
      ar: "توفر العجلات المعدنية مسارًا كهربائيًا بديلًا منخفض المقاومة."
    }
  },

  {
    id: 30,
    question: "Yellow and Red aspects are considered Restrictive Aspects in railway signaling.",
    translation: "تُعتبر الإشارات الصفراء والحمراء إشارات تقييدية في نظام الإشارات الحديدية.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Restrictive indications require caution, slowing down, or stopping.",
      ar: "تشير الجوانب التقييدية إلى ضرورة الحذر أو التهدئة أو التوقف."
    }
  },

  {
    id: 31,
    question: "A Neutral Relay is designed to open or close contacts based on the presence of current, regardless of polarity.",
    translation: "تم تصميم الريلاي المحايد للعمل عند وجود تيار بغض النظر عن القطبية.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Some relays respond only to the existence of electrical flow, not its direction.",
      ar: "تستجيب بعض الريلايات لوجود التيار فقط وليس لاتجاهه."
    }
  },

  {
    id: 32,
    question: "A Bi-stable (Latching) relay is designed to return immediately to its original neutral position once power is removed.",
    translation: "يعود الريلاي Bi-stable مباشرةً إلى وضعه الأصلي بمجرد فصل التغذية.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Latching devices are built to remember their last state.",
      ar: "تتميز الأجهزة القابلة للتثبيت بقدرتها على تذكر آخر حالة لها."
    }
  },

  {
    id: 33,
    question: "During maintenance, contact resistance testing checks the efficiency of the electrical connection when relay contacts are closed.",
    translation: "أثناء الصيانة يتم اختبار مقاومة التلامس للتأكد من كفاءة التوصيل الكهربائي عند غلق نقاط الريلاي.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Poor electrical contact can create heat and unreliable operation.",
      ar: "قد يؤدي ضعف التلامس الكهربائي إلى ارتفاع الحرارة وعدم استقرار التشغيل."
    }
  },

  {
    id: 34,
    question: "The primary advantage of Plug-in relays is rapid replacement without disturbing permanent wiring.",
    translation: "الميزة الأساسية لريلايات Plug-in هي إمكانية استبدالها بسرعة دون التأثير على التوصيلات الثابتة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Fast replacement reduces maintenance time and wiring errors.",
      ar: "يساعد الاستبدال السريع على تقليل وقت الصيانة وأخطاء التوصيل."
    }
  },

  {
    id: 35,
    question: "The Alignment of an LED signal head is critical to focus the beam toward the driver's eye level.",
    translation: "تُعتبر محاذاة رأس إشارة LED مهمة لتوجيه الشعاع نحو مستوى رؤية السائق.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Correct visibility is essential for drivers to read signals safely at distance.",
      ar: "تُعد الرؤية الصحيحة ضرورية ليتمكن السائق من قراءة الإشارة بأمان من مسافة بعيدة."
    }
  },

  {
    id: 36,
    question: "LED signal modules are typically made from multiple light-emitting diodes arranged in a matrix or cluster.",
    translation: "تتكون وحدات إشارات LED عادةً من عدة دايودات ضوئية مرتبة في شكل مصفوفة أو مجموعة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Modern LED assemblies distribute light using many small sources instead of one filament.",
      ar: "توزع وحدات LED الحديثة الضوء باستخدام عدة مصادر صغيرة بدل فتيلة واحدة."
    }
  },

  {
    id: 37,
    question: "A Deflecting Lens spreads part of the signal beam toward a driver stopped close to the signal.",
    translation: "تقوم العدسة العاكسة بتوجيه جزء من شعاع الإشارة نحو السائق القريب من الإشارة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Signals must remain visible even when the train is positioned very near the post.",
      ar: "يجب أن تبقى الإشارات مرئية حتى عند اقتراب القطار جدًا من العمود."
    }
  },

  {
    id: 38,
    question: "A Step-Down Transformer reduces high distribution voltage to a lower operating voltage.",
    translation: "يقوم المحول الخافض للجهد بتقليل جهد التوزيع العالي إلى جهد تشغيل منخفض.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Electrical systems often require safer operating voltages than transmission levels.",
      ar: "تحتاج الأنظمة الكهربائية عادةً إلى جهود تشغيل أكثر أمانًا من جهود النقل."
    }
  },

  {
    id: 39,
    question: "Transformers are preferred over resistors for reducing voltage in AC signaling because they are more efficient and produce less waste heat.",
    translation: "يُفضل استخدام المحولات بدل المقاومات لخفض الجهد في أنظمة AC لأنها أكثر كفاءة وأقل إنتاجًا للحرارة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Efficient voltage conversion minimizes unnecessary power loss.",
      ar: "يقلل التحويل الفعال للجهد من فقد الطاقة غير الضروري."
    }
  },

  {
    id: 40,
    question: "The Turns Ratio of a transformer determines the relationship between the primary and secondary voltage.",
    translation: "تحدد نسبة اللفات في المحول العلاقة بين جهد الملف الابتدائي والثانوي.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "The number of coil turns directly affects voltage transformation.",
      ar: "يؤثر عدد لفات الملفات مباشرةً على تحويل الجهد."
    }
  },

  {
    id: 41,
    question: "The primary job of a Point Machine is to physically move the switch rails to change a train's path.",
    translation: "الوظيفة الأساسية لماكينة التحويل هي تحريك قضبان التحويل لتغيير مسار القطار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Changing routes requires physical movement of the switch rails.",
      ar: "يتطلب تغيير المسار تحريكًا فعليًا لقضبان التحويل."
    }
  },

  {
    id: 42,
    question: "Detection contacts in a point machine verify that the switch rails are locked in the correct position.",
    translation: "تتحقق نقاط الـ Detection في ماكينة التحويل من تثبيت القضبان في الوضع الصحيح.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Signals must confirm that points are safely positioned before allowing train movement.",
      ar: "يجب التأكد من وضع التحويلات بأمان قبل السماح بحركة القطارات."
    }
  },

  {
    id: 43,
    question: "A Facing Point Lock prevents the switch from moving while a train is passing over it.",
    translation: "يمنع الـ Facing Point Lock حركة التحويلة أثناء مرور القطار فوقها.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Switch movement under a moving train could cause derailment.",
      ar: "قد يؤدي تحرك التحويلة أثناء مرور القطار إلى خروج القطار عن القضبان."
    }
  },

  {
    id: 44,
    question: "During a Correspondence Test, technicians verify that the physical point position matches the panel indication.",
    translation: "أثناء اختبار المطابقة يتأكد الفنيون من توافق وضع التحويلة الفعلي مع الإشارة على لوحة التحكم.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "The operator’s display must always reflect the actual field condition.",
      ar: "يجب أن تعكس لوحة التشغيل دائمًا الحالة الحقيقية بالميدان."
    }
  },

  {
    id: 45,
    question: "A friction clutch or overload cut-out protects the point machine motor if the rails are blocked.",
    translation: "يحمي القابض الاحتكاكي أو قاطع الحمل الزائد موتور التحويلة عند وجود عائق بالقضبان.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical protection devices prevent motor damage during obstructions.",
      ar: "تمنع وسائل الحماية الميكانيكية تلف المحرك عند حدوث عوائق."
    }
  },

  {
    id: 46,
    question: "110V is a standard voltage often used for heavy-duty DC point motors.",
    translation: "يُعتبر 110 فولت جهدًا شائعًا لمحركات التحويل الثقيلة DC.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway switch motors often operate at industrial control voltages.",
      ar: "تعمل محركات التحويل غالبًا على جهود تحكم صناعية."
    }
  },

  {
    id: 47,
    question: "Phantom Aspects in older signals were caused by sunlight reflecting off curved lenses.",
    translation: "كانت الإشارات الوهمية في الأنظمة القديمة ناتجة عن انعكاس ضوء الشمس على العدسات المنحنية.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Optical reflections sometimes made dark signals appear illuminated.",
      ar: "كانت الانعكاسات الضوئية تجعل بعض الإشارات تبدو مضاءة رغم أنها مطفأة."
    }
  },

  {
    id: 48,
    question: "Maintenance of an LED signal head usually includes cleaning the lens and checking the current regulating circuit.",
    translation: "تشمل صيانة إشارات LED عادةً تنظيف العدسة وفحص دائرة تنظيم التيار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Good visibility and stable electrical control are both important for LED signals.",
      ar: "تعتمد إشارات LED على وضوح الرؤية واستقرار التحكم الكهربائي."
    }
  },

  {
    id: 49,
    question: "A Voltage Stabilizer maintains a constant output voltage despite fluctuations in the main power supply.",
    translation: "يحافظ مثبت الجهد على خرج ثابت رغم تغيرات مصدر التغذية الرئيسي.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Sensitive signaling equipment requires steady electrical conditions.",
      ar: "تحتاج معدات الإشارات الحساسة إلى ظروف كهربائية مستقرة."
    }
  },

  {
    id: 50,
    question: "The Throw of a point machine is the total distance the switch rail moves from one side to the other.",
    translation: "يشير مصطلح Throw في ماكينة التحويل إلى المسافة الكاملة التي يتحركها لسان التحويل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Switch machines must move rails through a precise mechanical range.",
      ar: "يجب أن تحرك ماكينات التحويل القضبان ضمن مدى ميكانيكي محدد بدقة."
    }
  },

  {
    id: 51,
    question: "In mechanical signaling, motion is transferred from the lever frame to a distant signal primarily through a system of galvanized steel wires and pulleys.",
    translation: "في الإشارات الميكانيكية يتم نقل الحركة من إطار الروافع إلى الإشارة البعيدة باستخدام أسلاك وبكرات من الصلب المجلفن.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Older signaling systems relied on direct physical movement instead of electronics.",
      ar: "اعتمدت أنظمة الإشارات القديمة على الحركة الميكانيكية المباشرة بدل الأنظمة الإلكترونية."
    }
  },

  {
    id: 52,
    question: "The primary purpose of a Wire Compensator is to increase the weight of the wire run to make the levers harder to pull.",
    translation: "الغرض الأساسي من الـ Wire Compensator هو زيادة وزن السلك لجعل سحب الروافع أكثر صعوبة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Temperature changes can affect the length and tension of long mechanical wires.",
      ar: "تؤثر تغيرات الحرارة على طول وشد الأسلاك الميكانيكية الطويلة."
    }
  },

  {
    id: 53,
    question: "On a very hot day, a signal wire without a compensator may sag, which could prevent a signal from fully returning to Danger.",
    translation: "في الأيام الحارة قد يرتخي سلك الإشارة بدون معوض مما يمنع الإشارة من العودة بالكامل إلى وضع الخطر.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Heat causes metal expansion, which affects mechanical accuracy.",
      ar: "تؤدي الحرارة إلى تمدد المعادن مما يؤثر على دقة الحركة الميكانيكية."
    }
  },

  {
    id: 54,
    question: "Point Rodding is used instead of wire for moving points because rods can both push and pull heavy switch rails.",
    translation: "يُستخدم Point Rodding بدل الأسلاك لتحريك التحويلات لأن القضبان تستطيع الدفع والسحب.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Heavy railway switches require force in both movement directions.",
      ar: "تحتاج التحويلات الثقيلة إلى قوة في اتجاهي الحركة."
    }
  },

  {
    id: 55,
    question: "A Signal Gantry is a structure designed to support multiple signal heads or arms over several parallel tracks.",
    translation: "يُعتبر الـ Signal Gantry هيكلًا لدعم عدة إشارات فوق خطوط متوازية متعددة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Busy rail corridors often require signals to be positioned above several tracks.",
      ar: "تحتاج الممرات الحديدية المزدحمة إلى تركيب الإشارات فوق عدة خطوط."
    }
  },

  {
    id: 56,
    question: "When maintaining a Signal Gantry, the most critical safety concerns are corrosion of steel members and stability of the foundations.",
    translation: "أثناء صيانة الـ Signal Gantry تكون أهم عوامل الأمان هي تآكل الأجزاء المعدنية وثبات الأساسات.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Structural weakness can create major risks for railway operations and workers.",
      ar: "قد يتسبب ضعف الهيكل في مخاطر كبيرة على التشغيل والعاملين."
    }
  },

  {
    id: 57,
    question: "Interlocking in a mechanical lever frame prevents conflicting levers from being pulled at the same time.",
    translation: "يمنع نظام Interlocking في إطار الروافع الميكانيكي تشغيل الروافع المتعارضة في نفس الوقت.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway safety systems are designed to block unsafe route combinations.",
      ar: "تم تصميم أنظمة أمان السكك لمنع تكوين مسارات غير آمنة."
    }
  },

  {
    id: 58,
    question: "In Tappet Locking, steel wedges or dogs move inside the locking bed to block restricted levers.",
    translation: "في نظام Tappet Locking تتحرك أوتاد فولاذية داخل سرير القفل لمنع حركة الروافع الممنوعة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical interlocking physically blocks unsafe lever movements.",
      ar: "يقوم التشابك الميكانيكي بمنع الحركات غير الآمنة للروافع بشكل فعلي."
    }
  },

  {
    id: 59,
    question: "Sequential Locking ensures that the signalman pulls the heaviest lever first to test wire tension.",
    translation: "يضمن Sequential Locking أن يقوم عامل الإشارات بسحب أثقل رافعة أولًا لاختبار شد الأسلاك.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "This locking method is related to safe operating order rather than lever weight.",
      ar: "يرتبط هذا النظام بترتيب التشغيل الآمن وليس بوزن الروافع."
    }
  },

  {
    id: 60,
    question: "A Facing Point Lock physically clamps the switch rails against the stock rail to prevent movement under a train.",
    translation: "يقوم الـ Facing Point Lock بتثبيت لسان التحويل ضد القضيب الثابت لمنع الحركة أثناء مرور القطار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Switches must remain completely secure while trains pass over them.",
      ar: "يجب أن تبقى التحويلات ثابتة تمامًا أثناء مرور القطارات."
    }
  },

  {
    id: 61,
    question: "To secure a route, the Point lever is set first and then the FPL lever is pulled to lock it.",
    translation: "لتأمين المسار يتم أولًا ضبط رافعة التحويل ثم سحب رافعة الـ FPL لقفلها.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "The switch position must be established before it can be mechanically secured.",
      ar: "يجب تحديد وضع التحويلة أولًا قبل تثبيتها ميكانيكيًا."
    }
  },

  {
    id: 62,
    question: "A Detector mechanically proves that the switch rails are in the correct position before the signal can clear.",
    translation: "يقوم الـ Detector بإثبات ميكانيكي أن قضبان التحويل في الوضع الصحيح قبل فتح الإشارة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Signals should not clear unless the route is physically confirmed safe.",
      ar: "لا يجب فتح الإشارة إلا بعد التأكد فعليًا من أمان المسار."
    }
  },

  {
    id: 63,
    question: "A Semaphore signal conveys information by the position of a moving arm.",
    translation: "تنقل إشارة الـ Semaphore المعلومات من خلال وضع ذراع متحرك.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical railway signals communicate visually through arm movement.",
      ar: "تنقل الإشارات الميكانيكية المعلومات بصريًا من خلال حركة الذراع."
    }
  },

  {
    id: 64,
    question: "In the Lower Quadrant semaphore system, the arm moves downward from horizontal to indicate Clear.",
    translation: "في نظام Lower Quadrant تتحرك الذراع لأسفل من الوضع الأفقي للدلالة على السماح بالمرور.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Different semaphore systems use different arm directions to indicate proceed.",
      ar: "تستخدم أنظمة السيمفور المختلفة اتجاهات مختلفة للذراع للدلالة على السماح."
    }
  },

  {
    id: 65,
    question: "Red spectacle glass is used to display the Danger aspect at night in semaphore signaling.",
    translation: "يُستخدم الزجاج الأحمر لإظهار جانب الخطر ليلًا في إشارات السيمفور.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Night signal indications rely on colored illuminated lenses.",
      ar: "تعتمد إشارات الليل على العدسات الملونة المضاءة."
    }
  },

  {
    id: 66,
    question: "Cranks and pulleys are used to change the direction of wire or rod runs around curves.",
    translation: "تُستخدم الأذرع والبكرات لتغيير اتجاه الأسلاك أو القضبان حول المنحنيات.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical transmission systems often need directional changes along the route.",
      ar: "تحتاج أنظمة النقل الميكانيكية غالبًا إلى تغيير اتجاه الحركة على طول المسار."
    }
  },

  {
    id: 67,
    question: "The maximum practical distance for operating a mechanical signal is roughly 1,000 to 1,500 yards due to friction and wire stretch.",
    translation: "تبلغ أقصى مسافة عملية لتشغيل الإشارة الميكانيكية حوالي 1000 إلى 1500 ياردة بسبب الاحتكاك وتمدد الأسلاك.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical systems become less reliable as distance increases.",
      ar: "تقل موثوقية الأنظمة الميكانيكية كلما زادت المسافة."
    }
  },

  {
    id: 68,
    question: "Maintenance of a locking bed includes cleaning, lubrication, and checking for excessive play in tappets.",
    translation: "تشمل صيانة سرير القفل التنظيف والتشحيم وفحص الخلوص الزائد في التابات.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical precision is essential for safe interlocking operation.",
      ar: "تُعتبر الدقة الميكانيكية ضرورية للتشغيل الآمن لنظام التشابك."
    }
  },

  {
    id: 69,
    question: "A Signal Ladder on a gantry must be inspected for secure attachment and structural integrity.",
    translation: "يجب فحص سلم الإشارة على الجانتري للتأكد من ثباته وسلامته الإنشائية.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Technician safety depends heavily on reliable access structures.",
      ar: "تعتمد سلامة الفنيين بشكل كبير على سلامة وسائل الوصول."
    }
  },

  {
    id: 70,
    question: "The Catch Handle on a mechanical lever releases the lever from its locked position.",
    translation: "يقوم مقبض الـ Catch Handle بتحرير الرافعة من وضع القفل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Mechanical lever systems use release mechanisms before movement is allowed.",
      ar: "تستخدم الروافع الميكانيكية آليات تحرير قبل السماح بالحركة."
    }
  },

  {
    id: 71,
    question: "The primary function of the Automatic Warning System (AWS) is to provide the driver with an audible and visual warning regarding the upcoming signal aspect.",
    translation: "الوظيفة الأساسية لنظام AWS هي إعطاء السائق تحذيرًا صوتيًا ومرئيًا بخصوص حالة الإشارة القادمة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Drivers need both sound and visual alerts before reaching important signals.",
      ar: "يحتاج السائق إلى تنبيهات صوتية ومرئية قبل الوصول إلى الإشارات المهمة."
    }
  },

  {
    id: 72,
    question: "When an AWS sensor passes over a Clear (Green) signal magnet, a loud horn sounds in the cab and the emergency brakes are immediately applied.",
    translation: "عندما يمر حساس AWS فوق مغناطيس إشارة خضراء يصدر بوق قوي ويتم تفعيل الفرامل الطارئة فورًا.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "A clear signal should reassure the driver rather than trigger an emergency response.",
      ar: "الإشارة الخضراء تطمئن السائق ولا تؤدي إلى استجابة طارئة."
    }
  },

  {
    id: 73,
    question: "The AWS Receiver is a sensing probe mounted under the locomotive that acts as the physical interface with the trackside magnets.",
    translation: "يُعتبر AWS Receiver حساسًا مثبتًا أسفل القاطرة ويتعامل مع المغناطيسات الموجودة على الخط.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Trackside magnetic systems require a receiver mounted close to the rails.",
      ar: "تحتاج الأنظمة المغناطيسية إلى مستقبل قريب من القضبان."
    }
  },

  {
    id: 74,
    question: "In an AWS system, if a driver fails to acknowledge a Warning horn within a few seconds, an emergency brake application is initiated.",
    translation: "في نظام AWS إذا لم يؤكد السائق التحذير خلال ثوانٍ قليلة يتم تفعيل الفرامل الطارئة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Safety systems react automatically if the driver does not respond to warnings.",
      ar: "تتدخل أنظمة الأمان تلقائيًا إذا لم يستجب السائق للتحذير."
    }
  },

  {
    id: 75,
    question: "The Train Protection & Warning System (TPWS) was designed to automatically apply the brakes if a train is approaching a Danger signal too fast or passes it.",
    translation: "تم تصميم نظام TPWS لتفعيل الفرامل تلقائيًا إذا اقترب القطار بسرعة زائدة من إشارة خطر أو تجاوزها.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Overspeed near restrictive signals is a major railway safety concern.",
      ar: "السرعة الزائدة قرب إشارات الخطر تعتبر خطرًا رئيسيًا في السكك الحديدية."
    }
  },

  {
    id: 76,
    question: "The electronic loops installed on the track for TPWS operations are technically referred to as Transmitters or Grids.",
    translation: "تُعرف الحلقات الإلكترونية الخاصة بنظام TPWS باسم Transmitters أو Grids.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Trackside TPWS equipment communicates actively with the train.",
      ar: "تتواصل معدات TPWS الموجودة على الخط بشكل نشط مع القطار."
    }
  },

  {
    id: 77,
    question: "TPWS determines if a train is overspeeding by measuring the time taken for the train to travel between two specific loops.",
    translation: "يقوم TPWS بتحديد زيادة السرعة من خلال حساب الزمن بين حلقتين محددتين.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Speed can be calculated using distance and travel time.",
      ar: "يمكن حساب السرعة من خلال المسافة والزمن."
    }
  },

  {
    id: 78,
    question: "TPWS loops are usually installed in pairs to provide a timing window that allows the system to calculate the train’s speed accurately.",
    translation: "يتم تركيب حلقات TPWS غالبًا في أزواج لتوفير نافذة زمنية لحساب سرعة القطار بدقة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Two detection points are commonly needed for accurate timing measurements.",
      ar: "تحتاج القياسات الزمنية الدقيقة غالبًا إلى نقطتي كشف."
    }
  },

  {
    id: 79,
    question: "If a train passes a signal at Danger (SPAD), the TPWS TSS grid will initiate an immediate emergency brake application.",
    translation: "إذا تجاوز القطار إشارة خطر فإن شبكة TSS الخاصة بـ TPWS تقوم بتفعيل الفرامل الطارئة فورًا.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Passing a stop signal is treated as a serious emergency event.",
      ar: "يُعتبر تجاوز إشارة الوقوف حدثًا خطيرًا للغاية."
    }
  },

  {
    id: 80,
    question: "A Balise is a key trackside component used primarily in advanced systems like ETCS/ERTMS.",
    translation: "تُعتبر الـ Balise مكونًا أساسيًا بجانب الخط في أنظمة متقدمة مثل ETCS/ERTMS.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Modern European train control systems rely heavily on digital trackside data devices.",
      ar: "تعتمد أنظمة التحكم الأوروبية الحديثة بشكل كبير على أجهزة البيانات الرقمية بجانب الخط."
    }
  },

  {
    id: 81,
    question: "A Fixed Data Balise provides permanent track information such as gradients and speed limits to the train.",
    translation: "تقوم Fixed Data Balise بإرسال بيانات ثابتة مثل الميول وحدود السرعة إلى القطار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Some railway data remains constant regardless of signal conditions.",
      ar: "بعض بيانات السكك الحديدية تبقى ثابتة بغض النظر عن حالة الإشارات."
    }
  },

  {
    id: 82,
    question: "Modern Balises are typically powered via Tele-powering (induction) from the train's antenna as it passes over.",
    translation: "يتم تغذية الـ Balises الحديثة بالطاقة عن طريق الحث الكهرومغناطيسي من هوائي القطار أثناء مروره.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Some trackside devices receive temporary energy from passing trains.",
      ar: "تحصل بعض الأجهزة الجانبية على الطاقة مؤقتًا من القطارات المارة."
    }
  },

  {
    id: 83,
    question: "The On-board Computer (EVC) compares trackside data with the train's current speed and status to ensure safe margins.",
    translation: "يقارن الكمبيوتر الموجود على القطار بيانات الخط بسرعة القطار وحالته لضمان التشغيل الآمن.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Modern protection systems constantly compare permitted and actual train behavior.",
      ar: "تقوم أنظمة الحماية الحديثة بمقارنة سلوك القطار الفعلي بالمسموح به باستمرار."
    }
  },

  {
    id: 84,
    question: "A Transparent Balise can change its message depending on track conditions and signal aspects through an LEU connection.",
    translation: "يمكن لـ Transparent Balise تغيير رسالتها حسب حالة الخط والإشارة من خلال اتصال LEU.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Some balises are dynamic rather than permanently programmed.",
      ar: "بعض الـ Balises تكون ديناميكية وليست ثابتة البرمجة."
    }
  },

  {
    id: 85,
    question: "The Brake Interface is the electrical or pneumatic connection that allows the protection system to activate the train brakes.",
    translation: "يشير Brake Interface إلى الوصلة الكهربائية أو الهوائية التي تسمح لنظام الحماية بتشغيل الفرامل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Protection systems need a direct way to command braking systems.",
      ar: "تحتاج أنظمة الحماية إلى وسيلة مباشرة للتحكم في الفرامل."
    }
  },

  {
    id: 86,
    question: "The primary purpose of an Insulation Resistance test on signaling cables is to ensure insulation prevents current leakage to earth.",
    translation: "الغرض الأساسي من اختبار مقاومة العزل هو التأكد من منع تسرب التيار إلى الأرض.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Cable insulation quality is critical for electrical safety.",
      ar: "جودة عزل الكابلات ضرورية للسلامة الكهربائية."
    }
  },

  {
    id: 87,
    question: "A Megger (Insulation Tester) is the standard instrument used for performing Insulation Resistance tests.",
    translation: "يُعتبر جهاز Megger هو الأداة القياسية لاختبار مقاومة العزل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Electrical insulation testing requires a specialized high-resistance measuring tool.",
      ar: "يتطلب اختبار العزل الكهربائي جهازًا متخصصًا لقياس المقاومة العالية."
    }
  },

  {
    id: 88,
    question: "Before performing an IR test, the circuit should be disconnected from power and isolated from sensitive electronics.",
    translation: "قبل إجراء اختبار IR يجب فصل التغذية الكهربائية وعزل الدائرة عن الأجهزة الحساسة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "High-voltage testing procedures require careful isolation precautions.",
      ar: "تحتاج اختبارات الجهد العالي إلى احتياطات عزل دقيقة."
    }
  },

  {
    id: 89,
    question: "A High insulation resistance reading typically indicates that the cable insulation is damaged or degraded.",
    translation: "تشير القراءة العالية لمقاومة العزل عادةً إلى تلف أو تدهور العزل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Good insulation normally blocks unwanted current leakage effectively.",
      ar: "العزل الجيد يمنع تسرب التيار غير المرغوب فيه بكفاءة."
    }
  },

  {
    id: 90,
    question: "A Periodic Inspection is a scheduled routine check intended to identify wear before equipment failure occurs.",
    translation: "الفحص الدوري هو فحص مجدول لاكتشاف التآكل قبل حدوث الأعطال.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Preventive maintenance aims to detect problems before breakdowns happen.",
      ar: "تهدف الصيانة الوقائية لاكتشاف المشكلات قبل حدوث الأعطال."
    }
  },

  {
    id: 91,
    question: "Safety-critical relays are typically tested every single day to ensure the contacts haven't moved overnight.",
    translation: "يتم اختبار الريليهات الحرجة يوميًا للتأكد من عدم تحرك نقاط التلامس أثناء الليل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Critical railway equipment follows strict scheduled maintenance intervals.",
      ar: "تتبع المعدات الحرجة جداول صيانة محددة بدقة."
    }
  },

  {
    id: 92,
    question: "When working on live tracks, the primary role of a Lookout is to watch for approaching trains and warn the work group.",
    translation: "أثناء العمل على الخطوط الحية تكون مهمة الـ Lookout مراقبة القطارات القادمة وتحذير فريق العمل.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Dedicated safety observers are essential during trackside work.",
      ar: "يُعتبر وجود مراقب أمان ضروريًا أثناء العمل بجانب الخط."
    }
  },

  {
    id: 93,
    question: "Taking a Block refers to formally closing a section of track to train traffic so maintenance can be carried out safely.",
    translation: "يشير مصطلح Taking a Block إلى إغلاق جزء من الخط رسميًا أمام حركة القطارات لتنفيذ الصيانة بأمان.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Track workers often require protected access zones free from train movement.",
      ar: "يحتاج عمال الخطوط إلى مناطق محمية خالية من حركة القطارات."
    }
  },

  {
    id: 94,
    question: "A lookout typically uses a green flag to tell workers it is safe to remain on the track when a train is approaching.",
    translation: "يستخدم الـ Lookout عادةً علمًا أخضر لإخبار العمال أنه من الآمن البقاء على الخط عند اقتراب قطار.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Approaching trains require urgent warning signals, not permission to stay.",
      ar: "يتطلب اقتراب القطارات تحذيرًا عاجلًا وليس السماح بالبقاء على الخط."
    }
  },

  {
    id: 95,
    question: "Logbook documentation provides a legal and technical record of maintenance activities and test results.",
    translation: "توفر سجلات الصيانة توثيقًا قانونيًا وفنيًا لأنشطة الصيانة ونتائج الاختبارات.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Maintenance traceability is important for both safety investigations and audits.",
      ar: "يُعتبر تتبع أعمال الصيانة مهمًا للتحقيقات والمراجعات الفنية."
    }
  },

  {
    id: 96,
    question: "Technicians must update As-Built drawings after making changes to a circuit installation.",
    translation: "يجب على الفنيين تحديث مخططات As-Built بعد إجراء أي تعديل على الدائرة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Engineering drawings should always match the real installation.",
      ar: "يجب أن تتطابق الرسومات الهندسية دائمًا مع التركيب الفعلي."
    }
  },

  {
    id: 97,
    question: "Compliance with Locking Tables ensures maintenance work has not bypassed the intended safety logic.",
    translation: "يضمن الالتزام بجداول القفل عدم تجاوز منطق الأمان أثناء أعمال الصيانة.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Safety logic between signals and points must remain fully protected.",
      ar: "يجب الحفاظ على منطق الأمان بين الإشارات والتحويلات بالكامل."
    }
  },

  {
    id: 98,
    question: "If a Safety Critical defect is found, the technician should wait until the end of the shift before reporting it.",
    translation: "إذا تم اكتشاف عطل حرج للسلامة فيجب على الفني الانتظار حتى نهاية الوردية قبل الإبلاغ عنه.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "B",
    hint: {
      en: "Critical railway defects require immediate action to protect operations.",
      ar: "تتطلب الأعطال الحرجة في السكك الحديدية تدخلًا فوريًا لحماية التشغيل."
    }
  },

  {
    id: 99,
    question: "During a Point Obstruction Test, a gauge is used to verify that the points will not lock if an obstruction exists.",
    translation: "أثناء اختبار عائق التحويلة يتم استخدام مقياس للتأكد من أن التحويلة لن تُقفل في حالة وجود عائق.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Switches must detect obstructions before allowing train movement authority.",
      ar: "يجب أن تكتشف التحويلات العوائق قبل السماح بحركة القطارات."
    }
  },

  {
    id: 100,
    question: "Personal Track Safety (PTS) refers to the rules and qualifications that keep railway workers safe near the line.",
    translation: "يشير مصطلح PTS إلى القواعد والمؤهلات التي تحافظ على سلامة العاملين بالقرب من الخط.",
    options: {
      A: { text: "True", translation: "صح" },
      B: { text: "False", translation: "خطأ" }
    },
    correctAnswer: "A",
    hint: {
      en: "Railway staff require formal safety procedures before accessing operational tracks.",
      ar: "يحتاج العاملون بالسكك الحديدية إلى إجراءات سلامة رسمية قبل دخول الخطوط التشغيلية."
    }
  }
];

quizData = quizData.concat(trueFalseQuestions);

const beboMessages = {
    intro: ["مرحبا اسمي بيبو جاهز لبدء الاختبار؟"],
    correct: [
        "عاش يا وحش! أداء أسطوري.", "الله ينور عليك، تركيزك في السما!", "ممتاز! كمل يا بطل بنفس الحماس.",
        "وحش! إجابة فنية مية مية.", "رائع، أنت فاهم اللعبة كويس جداً.", "برافو! إجابة أسطورية زي ما توقعت.",
        "عاش يا دحيح، مجهودك جبار.", "تسلم إيدك، إجابة مظبوطة بالملي.", "أحسنت! فخور بيك فعلاً يا وحش."
    ],
    wrong: [
        "غلط تماماً! ركز بقى عشان كدة كتير أوي!",
        "إيه العك ده؟ فوق كدة واقرأ السؤال كويس يا هندسة!",
        "إجابة كارثية! راجع معلوماتك فوراً كدة مينفعش!",
        "غلط! أنت بتهزر ولا إيه؟ ركز بقى شوية!"
    ],
     resultsAdvice: [
        "نتيجتك دى يسطا ولا درجة حرارة.",
        "منتا لو تبص على التلميحات وأنت بتحل مكنتش جبت درجات الحرارة دى.",
        "تعال اشرب شاي يسطا باللي أنت عامله ده.",
        "متزعلش مش مهم درجتك في الامتحان المهم الصحة والستر.",
        "هيجي شخص يحسسك إنك في كفة والكون كله في كفة وبعدين يسقفلك بالكفتين على وشك علشان النتيجة اللي أنت جايبها دى."
    ],
    resultsSuccess: [
        "ما شاء الله عليك يا بطل!",
        "هايل بجد عاش عليك، استمر.",
        "شيء جميل جداً عندك أحسن من كده كمان عاش عليك."
    ]
};

let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

function setBebo(state, category, specificIdx = -1) {
    const robot = document.getElementById('bebo-robot');
    const bubble = document.getElementById('bebo-bubble');
    let msgs = beboMessages[category];
    
    robot.className = `bebo-robot ${state}`;
    let chosenMsg = (category === 'correct' && specificIdx !== -1) ? (msgs[specificIdx % msgs.length]) : msgs[Math.floor(Math.random() * msgs.length)];
    
    bubble.innerText = chosenMsg;
    bubble.classList.add('active');
    
    setTimeout(() => { 
        bubble.classList.remove('active');
        if(index < quizData.length && !userAnswers[index]) robot.classList.remove('success', 'error');
    }, 3500);
}

function toggleHint() { 
    document.getElementById('hint-panel').classList.toggle('active'); 
}

function init() {
    document.getElementById('total-idx').innerText = quizData.length.toString().padStart(2, '0');
    render();
    setTimeout(() => setBebo('ready', 'intro'), 500);
}

function render() {
    const data = quizData[index];
    document.getElementById('current-idx').innerText = (index + 1).toString().padStart(2, '0');
    
    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${data.question}</div>
        <div class="q-ar-box">${data.translation}</div>
    `;
    
    document.getElementById('hint-text').innerHTML = `
        <div style="font-family: 'Tajawal', sans-serif; text-align: right; direction: rtl; color: #94a3b8; font-size: 0.9rem; line-height: 1.6;">
            <p style="margin: 0 0 6px 0; text-align: left; direction: ltr;">${data.hint.en}</p>
            <p style="margin: 0;">${data.hint.ar}</p>
        </div>
    `;

    document.getElementById('hint-panel').classList.remove('active');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;
    
    document.getElementById('next-btn').disabled = !answered;
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = (index === quizData.length - 1) ? "FINALIZE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0;
    
    const btnSkip = document.getElementById('btn-skip');
    if (answered) {
        btnSkip.classList.add('hidden');
    } else {
        btnSkip.classList.remove('hidden');
    }

    // Handle MCQ with object-based options (A, B, C, D)
    container.className = "options-grid";
    const optionKeys = Object.keys(data.options); // ['A', 'B', 'C', 'D']
    optionKeys.forEach((key, i) => {
        const opt = data.options[key];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="char-idx">${key}</span>
            <span class="option-content">
                <span>${opt.text}</span>
                <span class="option-translation">${opt.translation}</span>
            </span>
        `;
        if (answered) {
            btn.disabled = true;
            if (key === data.correctAnswer) btn.classList.add('correct');
            if (userAnswers[index] === key && key !== data.correctAnswer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(key);
        }
        container.appendChild(btn);
    });

    const prog = ((index + 1) / quizData.length * 100);
    document.getElementById('progress-bar').style.width = prog + '%';
    document.getElementById('percentage-text').innerText = Math.round(prog) + '% COMPLETE';
    
    lucide.createIcons();
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    const isCorrect = choice === quizData[index].correctAnswer;
    setBebo(isCorrect ? 'success' : 'error', isCorrect ? 'correct' : 'wrong', index);
    render();
}

function handleBack() { 
    if (index > 0) { 
        index -= 1; 
        render(); 
    } 
}

function handleNext() { 
    if (index === quizData.length - 1) { 
        finish(); 
    } else { 
        index += 1; 
        render(); 
    } 
}

function handleSkip() { 
    if (index === quizData.length - 1) { 
        finish(); 
    } else { 
        index += 1; 
        render(); 
    } 
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    
    const score = userAnswers.filter((a, i) => a === quizData[i].correctAnswer).length;
    const pct = Math.round(score / quizData.length * 100);
    
    document.getElementById('final-raw-score').innerText = `${score}/${quizData.length}`;
    document.getElementById('final-pct').innerText = pct + '%';
    
    const fb = document.getElementById('final-feedback');
    const category = pct >= 80 ? 'resultsSuccess' : 'resultsAdvice';
    const randomMsg = beboMessages[category][Math.floor(Math.random() * beboMessages[category].length)];
    fb.innerText = randomMsg;

    const title = document.getElementById('final-bebo-title');
    title.innerText = pct >= 80 ? "مستوى مشرف جداً يا بطل!" : "محتاج مراجعة وتركيز أكتر..";

    // play result audio if present; fallback to tone on error
    const resultAudio = document.getElementById('result-audio');
    if (resultAudio) {
      try {
        resultAudio.currentTime = 0;
        const playPromise = resultAudio.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch((err) => { console.warn('result audio play failed:', err); playFallbackTone(); });
        }
      } catch (e) {
        console.warn('result audio play threw:', e);
        playFallbackTone();
      }
    } else {
      playFallbackTone();
    }

    lucide.createIcons();
}

window.onload = init;

function playFallbackTone(duration = 0.25, freq = 880, volume = 0.06) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.value = volume;
    o.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    o.start(now);
    g.gain.setValueAtTime(volume, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    o.stop(now + duration + 0.02);
    setTimeout(() => {
      try { ctx.close(); } catch (e) {}
    }, (duration + 0.05) * 1000);
  } catch (e) {
    console.warn('playFallbackTone failed', e);
  }
}
