package org.generation.WebProjectTTR.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class NftServiceMySQL implements NftService {

    private final NftRepository NftRepository;
    public NftServiceMySQL(@Autowired NftRepository NftRepository)
    {
        this.NftRepository = NftRepository;
    }

    @Override
    public Nft save(Nft Nft) {
        return NftRepository.save(Nft);
    }

    @Override
    public void delete (int idNft) {
        NftRepository.deleteById(idNft);
    }

    @Override
    List<Nft> all()
    {
    List<Nft> result = new ArrayList<>();
    NftRepository.findAll().forEach(result :: add);
    return result;
    }

    @Override
    public Nft findById(int idNft)
    {
        Optional<Nft> Nft = NftRepository.findById(idNft);
        Nft nftResponse = Nft.get();
        return nftResponse;
    }


}
