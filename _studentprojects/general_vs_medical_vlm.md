---
layout: post
title: "General vs specialized vision-language models for medical images"
status: current
inline: false
category: Multimodal
---
Recently, many models (pre-)trained with large scale datasets combining multiple type of inputs such as image and text have been released. 

For medical image classification models, where ImageNet is commonly use, some works have shown the impact of the pretraining dataset on the fine-tuned model, for example on the robustness to shortcut learning. It is however still under-studied for vision-language models.

The goal of the project would therefore be to compare vision-language models pretrained with natural images and with medical images. This comparision could be done on multiple characteristics such as the downstream performance, robustness, fairness, and calibration.

**Related papers:**

* Cheplygina, V. (2019). **Cats or CAT scans: Transfer learning from natural or medical image source data sets?**. Current Opinion in Biomedical Engineering, 9, 21-27.
* Dovile Juodelyte, Yucheng Lu, Amelia Jiménez-Sánchez, Sabrina Bottazzi, Enzo Ferrante, and Veronika Cheplygina. 2025. **Source Matters: Source Dataset Impact on Model Robustness in Medical Imaging**. In Applications of Medical Artificial Intelligence
* Luo, Y., Shi, M., Khan, M.O., Afzal, M.M., Huang, H., Yuan, S., Tian, Y., Song, L., Kouhana, A., Elze, T., et al.: **Fairclip: Harnessing fairness in vision-language learning**. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 12289–12301 (2024)
* Sourget, T., Restrepo, D., Hudelot, C., Ferrante, E., Christodoulidis, S., Vakalopoulou, M. (2026). **Fairness and Robustness of CLIP-Based Models for Chest X-Rays**. In: Fairness of AI in Medical Imaging. FAIMI 2025