export interface GalleryImage {
    id: string;
    url: string;
    title: string;
    height: number;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    // In a real application, this would fetch from the Stitch API using an API key or SDK.
    // For this demonstration, we are using the assets generated via the Stitch MCP tools.
    return [
        {
            id: '1',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidX_-Sk22dbz3oPQkQJTF2pWuY8-wYOzMHFNxPJHUXwFEaHG2DWdBgoxyj2in1evH-jmWpI0h2e_OSA1YSieb6UiQjrM9tl13PwB6HgW3a1rqxotCojK4S9Q1rZxYa2biRB9GDHQfW4J0RKxdhvBrqsiv9n9_ygFDb-gGsbVCUoY9fPrFKHRmlKUwcXsK-j1MyRfXrp-YeFQjqJpAsF_NHWCQmC2Lj_M8Jmo2UeunWkTH7xMsBsGOqsU1A',
            title: 'Golden Harp & Florals',
            height: 600
        },
        {
            id: '2',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidWZ5mxWQvA_GFZnhD1Rd2Mko6Hj_2PcYrBYknwK8IIlGZdZ7W7XRcutlfAKHE8xnrNN5auwpvCHC9UzN4poQPM6SbWNihC22UVBOxETaAqQGiYJvIzotOC0IK2zlCeZPfBiTb2hyh2zTlApdkcSISBdr5seo2XB7Eo3czNUob1Cw_oEvBrdDKaUp_WvwCKFO8xc7hB5BfFbCfe_vIFy7bY6I-34TxO4zPyalHdHqHJw0teuWHaCZZblgw',
            title: 'Emerald & Gold Table Setting',
            height: 400
        },
        {
            id: '3',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidW4kDfHqc1R9iJtCdnOkgBKFx1s_2ssnpj8jCy0gbG-FL0nc8PIf6ZkGUOMYEkiLX9CzXLKq65O7AsxQ5wI6Aius6geTo1QQ8lVuzcMlt-Pm9uqnfUjmOqLCXvoaAIS5xy3iGWyleRqyVgZ6BXK3OijhwZZ4RWgWgkXNUBi7rxaD5rmObbWdPQXzHWTteDXTIYZqLb4yk8obU0jW25QCD3amkqgibSA-27Enm9h0gxjLLbpqinyIabFnhA',
            title: 'Sunset Ceremony Setup',
            height: 500
        },
        {
            id: '4',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidVUCaQGms4VPTsp7U69BoIVBs3AADcwKxYc4DehWKksho9FjyA8isEnFbXbOMqmynUi6DQcdqCST-bIdxXf3Zej7ZSx7_t_gpcfob7MjhrVNEStd6wl9Jdh40E8Q7j_Ncpe_q5vTN4G8u5UcSUnGCf3Zvh1LbESW75f_bShdzfccItKfzfuh1BbbG3YpFAp0TmHUPfd7GL9CbM-ye1X0NPaHXJTCiN-PYB-RYjF5RZXvPQr4YiufKVqlwY',
            title: 'Grand Hall Entrance',
            height: 700
        },
        {
            id: '5',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidXxkk1wcOwjOrZ_QUgmNLGRmEqsugu8KwZH0C0R9aIsRlGk1tnl4kiwfFPj1oX3OOFLQPrBBrpd2ImFqqQ9LemdzVbse4M-dud0EzKq0pUorBP7nJAafbTOSFMYZK6Fl6g8ZRbqfBIkR1srczCmWbfVob6u_MB8XjrdB4UwRLkAB3SiN1lMuo489nkxhosAtba_h2s-Vp5OqEEyiffOQgAmLv5rnZs_iqG8rGhMBRaK1OZkfRwi9IwwVg',
            title: 'Bespoke Floral Arch',
            height: 450
        },
        {
            id: '6',
            url: 'https://lh3.googleusercontent.com/aida/AOfcidXSOGFjfc7tB2nQVvEmK5q0DBxZPkzx_X34a1oC1UuBznPEKLgyz8jzpSF1Z8YzloqHvylaA2j2d802jtXbJcrld_IXmQce6yGc2KpIRnE6wfJBTW8ctWd5_1DACAiw5LvCIxGQmQ4wsKLW03HOHEAdxE-T8CV8iEHhUiFC04yvGWkbsK72vObXHgCZw03Qwyy8wh-cJUrD4qy-MGV7dUUfAiLffayGzCc4vNak3Dy3cuzmlHkIthav5Q',
            title: 'Candlelit Reception',
            height: 600
        }
    ];
}
