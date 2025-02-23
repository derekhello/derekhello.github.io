from PIL import Image, ImageFilter, ImageOps, ImageEnhance
import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox

def apply_effect(image, effect):
    """根据用户选择应用不同的效果"""
    if effect == "素描":
        # 转为灰度图像
        gray_img = image.convert('L')
        # 使用边缘检测
        sketch_img = gray_img.filter(ImageFilter.FIND_EDGES)
        sketch_img = ImageOps.invert(sketch_img)
        return sketch_img
    elif effect == "负片":
        # 负片效果
        inverted_img = ImageOps.invert(image.convert("RGB"))
        return inverted_img
    else:
        return image  # 默认不做处理

def open_image():
    """打开图片文件"""
    file_path = filedialog.askopenfilename(title="选择图片", filetypes=[("Image Files", "*.jpg;*.jpeg;*.png")])
    if file_path:
        img = Image.open(file_path)
        return img
    return None

def show_image(image):
    """显示图像"""
    image.show()

def on_apply_effect():
    """处理用户选择的效果并显示图像"""
    effect = effect_var.get()
    img = open_image()
    if img:
        processed_img = apply_effect(img, effect)
        show_image(processed_img)
    else:
        messagebox.showerror("错误", "请先选择图片")

# 创建窗口
root = tk.Tk()
root.title("图像风格转换器")
root.geometry("300x130")

# 创建效果选择下拉菜单
effect_var = tk.StringVar(root)
effect_var.set("素描")  # 默认选项
effects = ["素描",  "负片"]
effect_menu = tk.OptionMenu(root, effect_var, *effects)
effect_menu.pack(pady=20)

# 创建应用效果按钮
apply_button = tk.Button(root, text="选择图片应用", command=on_apply_effect)
apply_button.pack(pady=10)

# 启动界面
root.mainloop()