package org.generation.WebProjectTTR.service;

import org.generation.WebProjectTTR.repository.NftRepository;
import org.generation.WebProjectTTR.repository.entity.Nft;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NftServiceMySQL implements NftService {

    private final NftRepository nftRepository;
    public NftServiceMySQL(@Autowired NftRepository nftRepository)
    {
        this.nftRepository = nftRepository;
    }

    @Override
    public Nft save(Nft nft) {
        return nftRepository.save(nft);
    }

    @Override
    public void delete (int idNft) {
        nftRepository.deleteById(idNft);
    }

    @Override
    public List<Nft> all()
    {
    List<Nft> result = new ArrayList<>();
    nftRepository.findAll().forEach(result :: add);
    return result;
    }

    @Override
    public Nft findById(int idNft)
    {
        Optional<Nft> nft = nftRepository.findById(idNft);
        Nft nftResponse = nft.get();
        return nftResponse;
    }


}
