package org.generation.WebProjectTTR.repository.entity;

import org.generation.WebProjectTTR.controller.dto.NftDto;
import javax.persistence.*;

@Entity
public class Nft {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idNft;//need to pass the id to a class method findItemById()

    private String title;
    private double price;
    private String imageUrl;
    private String description;

    private String category;


    public Nft() { }

    public Nft(NftDto nftDto) {
        this.title = nftDto.getTitle();

        this.price = nftDto.getPrice();

        this.imageUrl = nftDto.getImageUrl();

        this.description = nftDto.getDescription();

        this.category = nftDto.getCategory();


    }

    public Integer getIdNft() {
        return idNft;
    }

    public void setIdNft(Integer idNft) {
        this.idNft = idNft;
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

    @Override
    public String toString()
    {
        return "Nft{" + "idNft=" + idNft + ", title='" + title + '\'' + ", price='" + price + '\'' + ", imageUrl='"
                + imageUrl + '\'' + ",description='" + description + '\'' + ", category='" + category + '}';
    }

}


