package org.generation.WebProjectTTR.service;

import java.util.List;
public interface NftService {
    List<Nft> all();

    Nft save (Nft Nft);

    void delete(int idNft);

    Nft findById(int idNft);

}
