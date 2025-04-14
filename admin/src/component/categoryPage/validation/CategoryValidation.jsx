import * as Yup from "yup";

export const Categoryvalidation = Yup.object({
  category_name: Yup.string()
    .label("Category Name")
    .min(2)
    .max(19)
    .required("Please Enter Category Name"),
  category_url: Yup.string()
    .label("Category Url")
    .min(2)
    .max(19)
    .required("Please Enter Category Url"),
  meta_title: Yup.string()
    .label("Meta Title")
    .min(2)
    .max(19)
    .required("Please Enter Meta Title"),
  meta_keywords: Yup.string()
    .label("Meta Keywords")
    .min(2)
    .max(19)
    .required("Please Enter Meta Keywords"),
    meta_description: Yup.string()
    .min(2)
    .max(19)
    .required("Please Enter Meta Description"),
  editor: Yup.string()
    .label("Category Description")
    .min(4)
    .required("Category Description is required"),
  // parent_category: Yup.array()
  //   .label("Parent Category"),
  //   attribute: Yup.array()
  //   .label("Attribute"),
  parent_category: Yup.array()
    .min(1, "Please select at least one Parent Category")
    .required("Parent Category is required"),

  // attribute: Yup.array()
  //   .min(1, "Please select at least one Attribute")
  //   .required("Attribute is required"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
  category_image: Yup.mixed().required("Category Image is required"),
});
