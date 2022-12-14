import { RgbaColor } from "react-colorful";
import { IPageSocialMedia } from "../types/IPage";
import { IUser } from "../types/IUser";
import { Api } from "./api";

class PageService {
  endpoint = "page";

  getPage = async (pagename: string) => {
    try {
      const request = await Api.get(`${this.endpoint}`, {
        params: { pagename },
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  checkPagename = async (pagename: string) => {
    try {
      const request = await Api.get(`${this.endpoint}/check_pagename`, {
        params: { pagename },
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  createPage = async (pagename: string) => {
    try {
      const request = await Api.post(`${this.endpoint}/create`, { pagename });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  savePageInfos = async (
    uname: string,
    bio: string,
    pagename: string,
    newPagename: string
  ) => {
    try {
      const request = await Api.post(`${this.endpoint}/save_info`, {
        uname,
        bio,
        pagename,
        newPagename,
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  saveBadges = async (badges: string[], pagename: string) => {
    try {
      const request = await Api.post(`${this.endpoint}/save_badges`, {
        badges,
        pagename,
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  saveSocialMedia = async (items: IPageSocialMedia[], pagename: string) => {
    try {
      const request = await Api.post(`${this.endpoint}/save_social_media`, {
        items,
        pagename,
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  uploadAvatar = async (file: File, pagename: string) => {
    try {
      const request = await Api.post(
        `${this.endpoint}/upload_avatar?pagename=${pagename}`,
        {
          avatar: file,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  uploadBackground = async (file: File, pagename: string) => {
    try {
      const request = await Api.post(
        `${this.endpoint}/upload_background?pagename=${pagename}`,
        {
          background: file,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };

  updateColors = async (
    primaryColor: RgbaColor,
    secondaryColor: RgbaColor,
    fontColor: string,
    pagename: string
  ) => {
    try {
      const request = await Api.post(`${this.endpoint}/update_colors`, {
        primaryColor,
        secondaryColor,
        fontColor,
        pagename,
      });
      return request.data;
    } catch (error: any) {
      throw error && error.response ? error.response.data : error;
    }
  };
}

export default new PageService();
