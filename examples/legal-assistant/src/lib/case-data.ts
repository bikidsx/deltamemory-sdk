// Synthetic legal case data for TechFlow v. DataSync

export const caseData = {
  contract: {
    title: "Master Services Agreement",
    date: "2023-06-15",
    content: `MASTER SERVICES AGREEMENT

Between: TechFlow Inc. ("Client") and DataSync Solutions LLC ("Provider")
Effective Date: June 15, 2023

1. SCOPE OF SERVICES
Provider agrees to develop and deliver a custom data analytics platform ("the Platform") for Client, including:
- Real-time data ingestion pipeline
- Analytics dashboard with 15 custom visualizations
- API integration with Client's existing CRM (Salesforce)
- User authentication and role-based access control

2. PROJECT TIMELINE
- Phase 1 (Data Pipeline): Due August 15, 2023
- Phase 2 (Dashboard): Due October 1, 2023
- Phase 3 (Integration): Due November 15, 2023
- Final Delivery: December 1, 2023

3. COMPENSATION
Total Contract Value: $450,000
- 25% upon signing ($112,500)
- 25% upon Phase 1 completion ($112,500)
- 25% upon Phase 2 completion ($112,500)
- 25% upon Final Delivery ($112,500)

4. PERFORMANCE STANDARDS
Provider guarantees:
- 99.9% uptime for production systems
- Response time under 200ms for dashboard queries
- All deliverables to pass Client's QA testing

5. TERMINATION
Either party may terminate with 30 days written notice if:
- Material breach not cured within 15 days of notice
- Missed deadline by more than 30 days

6. LIMITATION OF LIABILITY
Provider's liability limited to fees paid under this Agreement.

7. KEY PERSONNEL
Provider designates Sarah Chen as Project Manager.
Client designates James Martinez as Technical Lead.

Signed:
Robert Kim, CEO - TechFlow Inc.
Michael Torres, CEO - DataSync Solutions LLC`,
  },

  emails: [
    {
      date: "2023-08-10",
      from: "Sarah Chen <sarah.chen@datasync.com>",
      to: "James Martinez <james.m@techflow.com>",
      subject: "Phase 1 Status Update",
      body: `Hi James,

Quick update on Phase 1 - we're on track for the August 15th deadline. The data pipeline is 90% complete. We just need to finish the error handling module.

One thing - we noticed the data volume is higher than originally scoped (500GB/day vs 200GB/day in the requirements). This might require some architecture changes for Phase 2.

Can we schedule a call to discuss?

Best,
Sarah`,
    },
    {
      date: "2023-08-16",
      from: "James Martinez <james.m@techflow.com>",
      to: "Sarah Chen <sarah.chen@datasync.com>",
      subject: "RE: Phase 1 Status Update",
      body: `Sarah,

Phase 1 was due yesterday. Where are we? I haven't received the deployment package.

The data volume was clearly stated in our kickoff meeting - I have the recording. This shouldn't be a surprise.

Please provide an updated timeline ASAP.

James`,
    },
    {
      date: "2023-08-18",
      from: "Sarah Chen <sarah.chen@datasync.com>",
      to: "James Martinez <james.m@techflow.com>",
      subject: "RE: Phase 1 Status Update",
      body: `James,

Apologies for the delay. We encountered unexpected issues with the Kafka cluster configuration. Phase 1 will be delivered by August 25th.

I understand this is past the deadline. We're adding additional resources to ensure Phase 2 stays on track.

Sarah`,
    },
    {
      date: "2023-09-28",
      from: "James Martinez <james.m@techflow.com>",
      to: "Sarah Chen <sarah.chen@datasync.com>",
      subject: "Phase 2 Concerns",
      body: `Sarah,

Phase 2 is due in 3 days and I've only seen 8 of the 15 visualizations. The ones I've seen have significant performance issues - queries taking 2-3 seconds, not the 200ms specified in the contract.

We need to discuss this immediately. Our board presentation is scheduled for October 15th and we were counting on this dashboard.

James`,
    },
    {
      date: "2023-10-05",
      from: "Robert Kim <robert.kim@techflow.com>",
      to: "Michael Torres <michael.t@datasync.com>",
      subject: "Formal Notice of Breach",
      body: `Michael,

This letter serves as formal notice that DataSync Solutions LLC is in material breach of the Master Services Agreement dated June 15, 2023.

Specifically:
1. Phase 1 was delivered 10 days late
2. Phase 2 remains incomplete as of October 5, 2023
3. Performance standards are not being met (2-3 second response times vs 200ms contractual requirement)

Per Section 5 of the Agreement, you have 15 days to cure these breaches. If not cured, TechFlow reserves the right to terminate the Agreement and pursue damages.

Robert Kim
CEO, TechFlow Inc.`,
    },
    {
      date: "2023-10-20",
      from: "Robert Kim <robert.kim@techflow.com>",
      to: "Michael Torres <michael.t@datasync.com>",
      subject: "Notice of Termination",
      body: `Michael,

As the breaches identified in our October 5th notice have not been cured, TechFlow Inc. hereby terminates the Master Services Agreement effective immediately.

We have paid $225,000 to date and received substantially incomplete deliverables. We will be pursuing recovery of these funds plus consequential damages.

Our counsel will be in touch.

Robert Kim
CEO, TechFlow Inc.`,
    },
  ],

  depositions: {
    sarahChen: {
      witness: "Sarah Chen",
      role: "Project Manager, DataSync Solutions",
      date: "2024-01-15",
      excerpts: [
        {
          question: "Ms. Chen, when did you first become aware that Phase 1 would be delayed?",
          answer: "Around August 12th or 13th. We discovered the Kafka configuration issues during final testing.",
        },
        {
          question: "Did you communicate this delay to TechFlow before the deadline?",
          answer: "I sent an email on August 10th mentioning we were on track, but I didn't anticipate the issues we found in testing.",
        },
        {
          question: "The contract specifies 200ms response time. Were you aware of this requirement?",
          answer: "Yes, but the data volumes were much higher than what was discussed in the kickoff meeting. The original scope assumed 200GB per day, but TechFlow was sending 500GB.",
        },
        {
          question: "Do you have documentation of the original scope discussion?",
          answer: "I... I believe it was discussed verbally. I don't have written documentation of that specific number.",
        },
        {
          question: "Did DataSync have the technical capability to meet the 200ms requirement?",
          answer: "With the original data volumes, yes. With the actual volumes, we would have needed to re-architect the solution, which wasn't in the budget.",
        },
      ],
    },
    jamesMartinez: {
      witness: "James Martinez",
      role: "CTO, TechFlow Inc.",
      date: "2024-01-18",
      excerpts: [
        {
          question: "Mr. Martinez, what data volumes did TechFlow communicate to DataSync?",
          answer: "We clearly stated 500GB per day in our requirements document, which was attached to the contract as Exhibit A.",
        },
        {
          question: "Did you have a kickoff meeting where data volumes were discussed?",
          answer: "Yes, on June 20th. I specifically mentioned we were processing 500GB daily and expected that to grow.",
        },
        {
          question: "Do you have a recording of that meeting?",
          answer: "Yes, we record all vendor meetings. I can provide the recording.",
        },
        {
          question: "What was the business impact of the delays?",
          answer: "We had to postpone our board presentation. We lost a potential Series B investor who wanted to see the analytics platform in action. That was a $10 million funding round.",
        },
        {
          question: "Did you attempt to work with DataSync to resolve the issues?",
          answer: "Multiple times. I offered to extend deadlines if they could commit to the performance requirements. They couldn't give me that commitment.",
        },
      ],
    },
  },

  meetingNotes: [
    {
      date: "2023-06-20",
      title: "Project Kickoff Meeting",
      attendees: ["James Martinez (TechFlow)", "Sarah Chen (DataSync)", "Robert Kim (TechFlow)", "Michael Torres (DataSync)"],
      notes: `- Reviewed project scope and timeline
- James confirmed current data volume: 500GB/day, expected to grow to 750GB by Q4
- Sarah acknowledged the volume requirements
- Discussed Salesforce integration requirements
- Next steps: DataSync to provide technical architecture by June 30`,
    },
    {
      date: "2023-09-15",
      title: "Phase 2 Review Meeting",
      attendees: ["James Martinez (TechFlow)", "Sarah Chen (DataSync)"],
      notes: `- Reviewed 8 completed visualizations
- Performance issues identified: avg response time 2.1 seconds
- Sarah mentioned team is "working on optimization"
- James expressed concern about October 1 deadline
- Action: DataSync to provide remediation plan by September 20`,
    },
    {
      date: "2023-10-02",
      title: "Emergency Status Call",
      attendees: ["Robert Kim (TechFlow)", "Michael Torres (DataSync)", "James Martinez (TechFlow)", "Sarah Chen (DataSync)"],
      notes: `- Phase 2 not delivered by October 1 deadline
- Only 10 of 15 visualizations complete
- Performance still at 1.8 seconds (vs 200ms requirement)
- TechFlow requested cure plan within 48 hours
- DataSync unable to commit to timeline
- Meeting ended without resolution`,
    },
  ],

  damages: {
    directDamages: [
      { item: "Payments made to DataSync", amount: 225000 },
      { item: "Internal engineering time (remediation)", amount: 45000 },
      { item: "Replacement vendor premium", amount: 85000 },
    ],
    consequentialDamages: [
      { item: "Lost Series B investment opportunity", amount: 10000000, note: "Disputed - causation unclear" },
      { item: "Delayed product launch (3 months revenue)", amount: 450000 },
      { item: "Customer churn due to missing features", amount: 125000 },
    ],
    totalClaimed: 10930000,
  },
};
