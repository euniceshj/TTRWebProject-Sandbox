package org.generation.WebProjectTTR.controller.dto;

public class NftDto {

    private String title;

    private double price;

    private String imageUrl;

    private String description;

    private String category;

    private int numlikes;

    public NftDto(String title, double price, String imageUrl, String description, String category, int numlikes)
    {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.category = category;
        this.numlikes = numlikes;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getNumlikes() {
        return numlikes;
    }

    public void setNumlikes(int numlikes) {
        this.numlikes = numlikes;
    }

}
