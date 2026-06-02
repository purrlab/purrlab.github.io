---
layout: post
title: "Investigating uncertainty of transferability estimation metrics"
status: current
inline: false
---
**Supervisors:** Niclas (daily supervisor), Veronika (co-supervisor / co-examiner)

Transfer learning (TL) is a deep learning method that is commonly used in domains with limited access to data such as medical imaging. TL offers a solution to this problem by leveraging information from a source domain with more easily obtainable data to improve performance on a target task where data is scarce. Nevertheless, it remains unclear what source is best suited for a given target task.

Transferability estimation (TE) metrics address this problem by estimating how well a source will adapt to a target task without the need of extensively fine-tuning all of them. Typically, these metrics return a score for a given source-target combination without considering the uncertainty that is part of the experimental setup. For example, the target dataset could consist of 5 or 500 images which is a factor that is usually not reflected in TE scores. 

The goal of this project is to explore ways of improving the robust interpretability of current TE metrics. For instance, this could be done by looking at confidence intervals instead of single scores.

Ideally, the project group should consist of two students.

## References
[1] Agostinelli Andrea, Pándy Michal, Uijlings Jasper, Mensink Thomas, and Ferrari Vittorio. How Stable Are Transferability Metrics Evaluations?, 10.48550/arXiv.2204.01403, 2022

[2] Ibrahim Shibal, Ponomareva Natalia, and Mazumder Rahul. Newer Is Not Always Better: Rethinking Transferability Metrics, Their Peculiarities, Stability and Performance, 10.1007/978-3-031-26387-3_42, 2023


